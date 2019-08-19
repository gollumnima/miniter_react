import React from "react";
import "./Form.scss";

class Form extends React.Component {
  render() {
    return (
      <div className="space_wrap">
        <p className="word">{this.props.word}</p>
        <input className="space">{this.props.space}</input>
      </div>
    );
  }
}

export default Form;
