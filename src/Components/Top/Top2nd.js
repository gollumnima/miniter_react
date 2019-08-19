import React from "react";
import "./Top2nd.scss";

class Top2nd extends React.Component {
  render() {
    return (
      <div className="doorits_box">
        <ul>
          <li className="bold">{this.props.bold}</li>
          <li className="light">{this.props.light}</li>
        </ul>
      </div>
    );
  }
}

export default Top2nd;
