import * as React from "react";

// Styles
import "./Style.css";

import logo from "assets/img/logo.svg";

type Props = {
  toggleEvents: any;
};

type State = {
  allState: boolean;
};

class Header extends React.Component<Props, State> {
  public state: State = {
    allState: true
  };

  public changeState = (valueState: boolean) => {
    this.setState({ allState: valueState });
    this.props.toggleEvents(!valueState);
  };

  public render() {
    return (
      <header>
        <ul className="App-header">
          <li className="logo">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Tech events</h1>
            </div>
          </li>
          <li
            className={this.state.allState ? "link active" : "link"}
            onClick={() => this.changeState(true)}
          >
            <h3>All events</h3>
          </li>
          <li
            className={!this.state.allState ? "link active" : "link"}
            onClick={() => this.changeState(false)}
          >
            <h3>My events</h3>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
