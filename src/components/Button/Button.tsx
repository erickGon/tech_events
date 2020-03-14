import * as React from "react";

// Styles
import "./Style.css";

type Props = {
  text: string;
  secondary?: boolean;
};

class Header extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <a
        className={
          this.props.secondary
            ? "trivago-secondary-button"
            : "trivago-primary-button"
        }
      >
        {this.props.text}
      </a>
    );
  }
}

export default Header;
