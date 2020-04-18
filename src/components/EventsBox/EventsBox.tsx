import * as React from "react";

// Styles
import "./Style.css";

// Types
import cityType from "@/types/city";
import eventType from "@/types/event";

// Components
import Button from "@/components/Button/Button";
import EventsList from "@/components/EventsList/EventsList";
import Input from "@/components/Input/Input";

// Services
import filterByNameOrCity from "@/services/filterByNameOrCity";
import filterByTimeOfDay from "@/services/filterByTimeOfDay"
import filterFree from "@/services/filterFree";
import groupByDate from "@/services/groupByDate";
import isStringEmpty from "@/services/isStringEmpty";
import parseDate from "@/services/parseDate";

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
};

class EventsBox extends React.Component<Props, State> {
  public state: State = {
    eventsSortByDate: [],
    nameOrCity: "",
    selectedTimeOfDay: "",
    showOnlyFree: false
  };

  constructor(props: Props) {
    super(props);
  }

  public toggleFreeEvents = () => {
    this.setState({ showOnlyFree: !this.state.showOnlyFree });
  };

  public handleChange = (text: string): void => {
    this.setState({ nameOrCity: text });
  };

  public selectTimeOfDay = (time: string) => {

    if(time === this.state.selectedTimeOfDay){
      this.setState({selectedTimeOfDay: ""})
    } else {
      this.setState({selectedTimeOfDay: time})
    }
    console.log(time);
  }

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
      ? filterByTimeOfDay(
          eventsArray,
          this.state.selectedTimeOfDay
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
            <a onClick={() => this.toggleFreeEvents()}>
              <Button text="Free" secondary={true} />
            </a>
          ) : (
            <a onClick={() => this.toggleFreeEvents()}>
              <Button text="All" />
            </a>
          )}

            <div>
              <a onClick={() => this.selectTimeOfDay("morning")}>
                <Button text="Morning" secondary={this.state.selectedTimeOfDay === "morning"}/>
              </a>
              <a onClick={() => this.selectTimeOfDay("afternoon")}>
                <Button text="Afternoon" secondary={this.state.selectedTimeOfDay === "afternoon"}/>
              </a>
              <a onClick={() => this.selectTimeOfDay("evening")}>
                <Button text="Evening" secondary={this.state.selectedTimeOfDay === "evening"}/>
              </a>
              <a onClick={() => this.selectTimeOfDay("night")}>
                <Button text="Night" secondary={this.state.selectedTimeOfDay === "night"}/>
              </a>
            </div>

          <Input
            handleChange={this.handleChange}
            name="nameOrCity"
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
