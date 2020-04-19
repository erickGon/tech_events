import * as React from "react";

// Styles
import "./Style.css";

type Props = {
  active?: boolean;
  text: string;
  secondary?: boolean;
};

class Button extends React.Component<Props> {
  public render() {
    const buttonStyle = this.props.secondary
      ? "trivago-secondary-button"
      : "trivago-primary-button";

    const buttonActive = this.props.active ? "trivago-active" : "";

    const buttonClass = `${buttonStyle} ${buttonActive}`;

    return <div className={buttonClass}>{this.props.text}</div>;
  }
}

export default Button;
