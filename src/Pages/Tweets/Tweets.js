import React from "react";
import "./Tweets.scss";
import Right from "../../Components/Right/Right";
import Top from "../../Components/Top/Top";
import Left from "../../Components/Left/Left";

class Tweets extends React.Component {
  render() {
    return (
      <div className="tw_body">
        <Top />
        <div className="mid_container">
          <Left />
          <Right />
        </div>
      </div>
    );
  }
}

export default Tweets;
