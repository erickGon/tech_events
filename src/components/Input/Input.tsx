import * as React from "react";

// Styles
import "./Style.css";

type Props = {
    name: string;
    placeholder: string;
    secondary?: boolean;
    type: string;
    handleChange(text: string): void;
};

type State = {
    inputValue: string; 
}

class Input extends React.Component<Props, State> {
  public state: State = {
      inputValue: ""
  };

  constructor(props: Props) {
      super(props);
  }

  

  public handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.currentTarget.value });
    this.props.handleChange(this.state.inputValue);
  };

  public render() {
    return (
      <input
        className="trivago-primary-input"
        name={this.props.name}
        onChange={this.handleChange}
        placeholder={ this.props.name}
        type={this.props.type}
        value={this.state.inputValue}
      />
    );
  }
}


export default Input;
