import * as React from "react";

// Styles
import "./Style.css";

// Types
import cityType from "types/city";
import eventType from "types/event";

// Components
import Button from "components/Button/Button";
import EventsList from "components/EventsList/EventsList";

// Services
import filterByNameOrCity from "services/filterByNameOrCity";
import filterFree from "services/filterFree";
import groupByDate from "services/groupByDate";
import isStringEmpty from "services/isStringEmpty";
import parseDate from "services/parseDate";

type Props = {
  cities: cityType[];
  events: eventType[];
  showMyEvents: boolean;
};

type State = {
  eventsSortByDate: any;
  myEvents: eventType[];
  showOnlyFree: boolean;
  nameOrCity: string;
};

class EventsBox extends React.Component<Props, State> {
  public state: State = {
    eventsSortByDate: [],
    myEvents: JSON.parse(localStorage.getItem("myEvents") || "[]"),
    nameOrCity: "",
    showOnlyFree: false
  };

  constructor(props: Props) {
    super(props);
  }

  public componentWillUpdate() {
    this.state.myEvents = JSON.parse(localStorage.getItem("myEvents") || "[]");
  }

  public toggleFreeEvents = () => {
    this.setState({ showOnlyFree: !this.state.showOnlyFree });
  };

  public handleChange = (event: any) => {
    this.setState({ nameOrCity: event.target.value });
  };

  public render() {
    let eventsArray = this.props.showMyEvents
      ? this.state.myEvents
      : this.props.events;

    eventsArray = this.state.showOnlyFree
      ? filterFree(eventsArray)
      : eventsArray;

    eventsArray = isStringEmpty(this.state.nameOrCity)
      ? filterByNameOrCity(
          eventsArray,
          this.state.nameOrCity,
          this.props.cities
        )
      : eventsArray;

    const eventsSortByDate = groupByDate(eventsArray);

    const events =
      eventsSortByDate.length > 0 ? (
        eventsSortByDate.map((item: any) => {
          return (
            <div key={item.date}>
              <div className="box-date">
                <p>
                  <strong>{parseDate(item.date, "dddd Do MMMM")}</strong>
                </p>
              </div>
              <div className="box">
                <ul>
                  {item.events.map((event: eventType) => {
                    return (
                      <EventsList
                        key={event.id}
                        event={event}
                        cities={this.props.cities}
                        showMyEvents={this.props.showMyEvents}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })
      ) : (
        <div className="box-title">
          <h2>there are not events</h2>
        </div>
      );

    return (
      <section id="events-box">
        <div className="box-filter">
          {this.state.showOnlyFree ? (
            <span onClick={() => this.toggleFreeEvents()}>
              <Button text="Free" secondary={true} />
            </span>
          ) : (
            <span onClick={() => this.toggleFreeEvents()}>
              <Button text="All" />
            </span>
          )}

          <input
            type="text"
            name="nameOrCity"
            placeholder=" Search by name of city"
            value={this.state.nameOrCity}
            onChange={this.handleChange}
          />
        </div>
        {this.props.showMyEvents ? (
          <div className="box-title">
            <h2>My next tech events</h2>
          </div>
        ) : null}
        {events}
      </section>
    );
  }
}

export default EventsBox;
