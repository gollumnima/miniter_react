import React from "react";
import Right1st from "./Right1st"
import "./Right.scss"
import "./Right1st.scss";

class Right extends React.Component {
  render() {
    return (
      <div className="right_wrap">
        <Right1st />
      </div>
    );
  }
}

export default Right;