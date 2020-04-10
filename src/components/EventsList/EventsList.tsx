import * as React from "react";

// Styles
import "./Style.css";

// Components
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";

// Types
import cityType from "@/types/city";
import eventType from "@/types/event";

// Services
import hasSingUp from "@/services/hasSingUp";
import parseDate from "@/services/parseDate";
import parseTimeBetween from "@/services/parseTimeBetween";
import setCityName from "@/services/setCityName";

type Props = {
  event: eventType;
  cities: cityType[];
  showMyEvents: boolean;
};

type State = {
  hideLine: boolean;
  showModal: boolean;
};

class EventsList extends React.Component<Props, State> {
  public state: State = {
    hideLine: false,
    showModal: false
  };

  constructor(props: Props) {
    super(props);
  }

  public toggleModal = (): void => {
    this.setState({ showModal: !this.state.showModal });
  };

  public cancelReservation = (id: number) => {
    let myEvents = JSON.parse(localStorage.getItem("myEvents") || "[]");

    myEvents = myEvents.filter((event: eventType) => event.id !== id);

    localStorage.setItem("myEvents", JSON.stringify(myEvents || "[]"));

    this.setState({ hideLine: true });
  };

  public render() {
    return (
      <div>
        {this.props.showMyEvents && this.state.hideLine ? null : (
          <section className="events-list">
            <div className="col-1">
              <h3>{parseDate(this.props.event.startDate, "HH:mm")}</h3>
            </div>
            <div className="left-text col-2">
              <h3>
                <span> {this.props.event.name} </span>
                {this.props.event.isFree ? (
                  <span className="green-text"> Free!!! </span>
                ) : null}
              </h3>
              <p>
                {setCityName(this.props.cities, this.props.event.city) +
                  " - " +
                  parseTimeBetween(
                    this.props.event.startDate,
                    this.props.event.endDate
                  )}
              </p>
            </div>

            {this.props.showMyEvents ? (
              <div className="col-1">
                <a onClick={() => this.cancelReservation(this.props.event.id)}>
                  <Button text="Cancel" secondary={true} />
                </a>
              </div>
            ) : (
              <div className="col-1">
                {hasSingUp(this.props.event) ? (
                  <a onClick={() => this.toggleModal()}>
                    <Button text="Sing Up" />
                  </a>
                ) : (
                  <span>
                    <Button text="You are in" secondary={true} />
                  </span>
                )}
              </div>
            )}

            <Modal
              showModal={this.state.showModal}
              toggleModal={this.toggleModal}
              cities={this.props.cities}
              event={this.props.event}
            />
          </section>
        )}
      </div>
    );
  }
}

export default EventsList;
