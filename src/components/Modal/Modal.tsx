import * as React from "react";

// Styles
import "./Style.css";

// Components
import Button from "../Button/Button";

// Types
import cityType from "../../types/city";
import eventType from "../../types/event";

// Services
import parseDate from "../../services/parseDate";
import setCityName from "../../services/setCityName";

type Props = {
  cities: cityType[];
  event: eventType;
  showModal: boolean;
  toggleModal(): void;
};

class Modal extends React.Component<Props> {
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
            <div className="modal-background" />
            <div className="modal-box">
              <div className="modal-header">
                <span />

                <h2>Join the event</h2>

                <button className="close-x" onClick={this.props.toggleModal}>
                  X
                </button>
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
                <button onClick={this.props.toggleModal}>
                  <Button text="Cancel" secondary={true} />
                </button>
                <button onClick={this.joinEvent}>
                  <Button text="Join" />
                </button>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Modal;
