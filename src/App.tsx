import * as React from "react";

// Styles
import "assets/styles/App.css";

// Components
import EventsBox from "components/EventsBox/EventsBox";
import Header from "components/Header/Header";

// Services
import GetApiData from "services/getApiData";

// Types
import cityType from "types/city";
import eventType from "types/event";

type Props = {};

type State = {
  cities: cityType[];
  events: eventType[];
  showMyEvents: boolean;
};

class App extends React.Component<Props, State> {
  public state: State = {
    cities: [],
    events: [],
    showMyEvents: false
  };

  public componentDidMount() {
    GetApiData("events").then(value => {
      this.setState({ events: value.data });
    });

    GetApiData("cities").then(value => {
      this.setState({ cities: value.data });
    });

    const myEvents = JSON.parse(localStorage.getItem("myEvents") || "[]");

    localStorage.setItem("myEvents", JSON.stringify(myEvents));
  }

  public toggleEvents = (show: boolean) => {
    this.setState({ showMyEvents: show });
  };

  public render() {
    return (
      <div className="App">
        <Header toggleEvents={this.toggleEvents} />

        <div className="content">
          <EventsBox
            events={this.state.events}
            cities={this.state.cities}
            showMyEvents={this.state.showMyEvents}
          />
        </div>
      </div>
    );
  }
}

export default App;
