import React from "react";
import Top2nd from "../Top/Top2nd"
import "../Top/Top2nd.scss"
import "./Left.scss";

class Left extends React.Component {

  render() {
    return (
        <div className="dooriter_bottom">
          <div className="bar_wrap2">
          <Top2nd />
          <Top2nd />
          </div>
          <div 
            className="profile_container"
          >
            <div 
              className="profile_up"
            >
              <img 
                className="pf_pic" 
                src={require("./dooriter_pf.jpg")} alt="둘둘" 
              />
            </div>
            <div 
              className="profile_down"
            >
              <span 
              className="pf_name"
              >
              Doori Kim
              </span>
              <span 
              className="pf_nickname"
              >
              @dooreplay
              </span>
              <span 
              className="pf_introduce"
              >
              개발자 꿈나무입니다.
              <br />잘 부탁드립니다.
              <br />
              위코드 짱짱 화이팅!{" "}
              </span>
            </div>
          </div>
        </div>
    );
  }
}

export default Left;
