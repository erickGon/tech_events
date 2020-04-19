import * as React from "react";

// Styles
import "./Style.css";

// Types
import cityType from "../../types/city";
import eventType from "../../types/event";

// Components
import Button from "../Button/Button";
import EventsList from "../EventsList/EventsList";
import Input from "../Input/Input";

// Services
import filterByNameOrCity from "../../services/filterByNameOrCity";
import filterByTimeOfDay from "../../services/filterByTimeOfDay";
import filterFree from "../../services/filterFree";
import groupByDate from "../../services/groupByDate";
import isStringEmpty from "../../services/isStringEmpty";
import parseDate from "../../services/parseDate";

type Props = {
  cities: cityType[];
  events: eventType[];
  myEvents: eventType[];
  showMyEvents: boolean;
};

type State = {
  eventsSortByDate: any;
  nameOrCity: string;
  selectedTimeOfDay: string;
  showOnlyFree: boolean;
  arrayOfTime: string[];
};

class EventsBox extends React.Component<Props, State> {
  public state: State = {
    arrayOfTime: ["morning", "afternoon", "evening", "night"],
    eventsSortByDate: [],
    nameOrCity: "",
    selectedTimeOfDay: "",
    showOnlyFree: false
  };

  public toggleFreeEvents = (show: boolean) => {
    this.setState({ showOnlyFree: show });
  };

  public handleChange = (text: string): void => {
    this.setState({ nameOrCity: text });
  };

  public selectTimeOfDay = (time: string) => {
    if (time === this.state.selectedTimeOfDay) {
      this.setState({ selectedTimeOfDay: "" });
    } else {
      this.setState({ selectedTimeOfDay: time });
    }
  };

  public render() {
    let eventsArray = this.props.showMyEvents
      ? this.props.myEvents
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

    eventsArray = isStringEmpty(this.state.selectedTimeOfDay)
      ? filterByTimeOfDay(eventsArray, this.state.selectedTimeOfDay)
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

    const buttonsTimeOfDay = this.state.arrayOfTime.map(
      (name: string, index: number) => {
        return (
          <button
            className={
              index + 1 === this.state.arrayOfTime.length ? "last-button" : ""
            }
            key={name}
            onClick={() => this.selectTimeOfDay(name)}
          >
            <Button
              text={name}
              secondary={this.state.selectedTimeOfDay === name}
              active={this.state.selectedTimeOfDay === name}
            />
          </button>
        );
      }
    );

    return (
      <section id="events-box">
        <div className="box-filter">
          <div className="button-group">
            <button onClick={() => this.toggleFreeEvents(false)}>
              <Button
                active={!this.state.showOnlyFree}
                secondary={!this.state.showOnlyFree}
                text="All"
              />
            </button>
            <button
              className="last-button"
              onClick={() => this.toggleFreeEvents(true)}
            >
              <Button
                active={this.state.showOnlyFree}
                secondary={this.state.showOnlyFree}
                text="Free"
              />
            </button>
          </div>

          <div className="button-group">{buttonsTimeOfDay}</div>

          <Input
            handleChange={this.handleChange}
            name="Name or city"
            placeholder=" Search by title or city"
            type="text"
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
