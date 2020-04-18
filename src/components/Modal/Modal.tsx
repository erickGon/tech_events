import * as React from "react";

// Styles
import "./Style.css";

// Components
import Button from "@/components/Button/Button";

// Types
import cityType from "@/types/city";
import eventType from "@/types/event";

// Services
import parseDate from "@/services/parseDate";
import setCityName from "@/services/setCityName";

type Props = {
  cities: cityType[];
  event: eventType;
  showModal: boolean;
  toggleModal(): void;
};

class Modal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public joinEvent = () => {
    this.props.toggleModal();
    const myEvents = JSON.parse(localStorage.getItem("myEvents") || "[]");

    myEvents.push(this.props.event);

    localStorage.setItem("myEvents", JSON.stringify(myEvents || "[]"));
  };

  public render() {
    return (
      <div>
        {this.props.showModal ? (
          <section id="modal">
            <a className="modal-background" onClick={this.props.toggleModal} />
            <div className="modal-box">
              <div className="modal-header">
                <span />

                <h2>Join the event</h2>

                <a className="close-x" onClick={this.props.toggleModal}>
                  X
                </a>
              </div>
              <div className="modal-content">
                <p>
                  You're about to sing up for {this.props.event.name}. This
                  event takes place the
                  {" " + parseDate(this.props.event.startDate, "Do MMMM") + " "}
                  in
                  {" " + setCityName(this.props.cities, this.props.event.city)}
                </p>
                <p>Are you sure?</p>
              </div>
              <div className="modal-footer">
                <a onClick={this.props.toggleModal}>
                  <Button text="Cancel" secondary={true} />
                </a>
                <a onClick={this.joinEvent}>
                  <Button text="Join" />
                </a>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Modal;
