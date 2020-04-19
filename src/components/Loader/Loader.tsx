import * as React from "react";

// Styles
import "./Style.css";

import logo from "../../assets/img/logo.svg";

type Props = {
  show: boolean;
};

class Loader extends React.Component<Props> {
  public render() {
    return (
      <div>
        {this.props.show ? (
          <section id="loader">
            <div className="loader-background">
              <img src={logo} className="App-logo loader-logo" alt="logo" />
            </div>
          </section>
        ) : null}
      </div>
    );
  }
}

export default Loader;
