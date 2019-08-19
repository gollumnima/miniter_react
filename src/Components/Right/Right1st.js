import React from "react";
import Top2nd from "../Top/Top2nd";
import "../Top/Top2nd.scss";
import "./Right1st.scss";

class Right1st extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitterText: "",
      tweetBox: []
    };
  }

  handleChange = e => {
    this.setState({
      twitterText: e.target.value
    });
  };

  //새로 트윗 입력했을 때
  addTweet = () => {
    this.state.tweetBox.unshift({
      text: this.state.twitterText,
      date: new Date(),
      name: "Doori Kim"
    });

    this.setState({
      tweetBox: this.state.tweetBox
    });
  };

  removeTweet = () => {
    this.setState({
      tweetBox: this.state.tweetBox
    });
  };

  render() {
    let {
      tweetBox,
      twitterText
      // nameBtn,
      // time
    } = this.state;

    return (
      <div className="right_wrap">
        <div className="bar_wrap">
          <Top2nd bold="Doorits" light={this.state.tweetBox.length} />
          <Top2nd bold="Followers" light="24" />
          <Top2nd bold="Followings" light="2" />
        </div>
        <div className="twitwit">
          <div className="write_doorits">
            <textarea
              className="write_doorits_input"
              value={twitterText}
              onChange={this.handleChange}
              placeholder="     What's happening? :)"
              maxLength="300"
            />
            <button className="doorit_btn" onClick={this.addTweet}>
              트윗!
            </button>
            <div className="count_words">
              <span className="min_count">{twitterText.length}</span>/
              <span className="max_count">300</span>
            </div>
          </div>
          <div className="doorits_box">
            <ul>
              {tweetBox.map((el, idx) => (
                <li key={idx}>
                  <button className="name_btn" onClick={this.removeTweet}>
                    {el.name}
                  </button>
                  <span className="post_time">{el.date.toString()}</span>
                  <p className="post_txt">{el.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Right1st;
