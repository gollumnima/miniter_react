import React from "react";
import "./Top1st.scss";


class Top1st extends React.Component {
        
    render() {
    return (
        <div className = "top1st_wrap">
            <div className="dooriter_bar">
                <div className="dooriter_bar_left_1">
                    <div className="dooriter_bar_left_2">
                        <a className="bar_home" href="https://twitter.com/">
                        Home
                        </a>
                        <a className="bar_company" href="https://wecode.co.kr/">
                        Company
                        </a>
                    </div>
                </div>
            </div>        
            <div className="dooriter_2nd_bar">
                <div className="color_2nd_bar">
                    <span className="wecode">>wecode</span>
                </div>
            </div>
        </div>
    );
  }
}

export default Top1st;


