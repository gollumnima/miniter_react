import React from "react";
import "./Signup.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      id: ""
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  //   componentWillUnmount() {
  //     console.log('componentDidMount');
  //   }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillMount");
  }

  handleInputChange = e => {
    console.log(e.target.value);

    this.setState({
      id: e.target.value
    });
  };
  render() {
    console.log("render");
    return (
      <>
        <div id="signup_container">
          <h1 class="sign_please">Sign up to Dooriter</h1>
          <div id="signup_input_container">
            <input class="sign_id" placeholder="Enter ID"></input>
            <input class="sign_name" placeholder="Enter Name"></input>
            <input class="sign_pw" placeholder="Password"></input>
            <input class="sign_repw" placeholder="Check Password"></input>
          </div>
          <button class="signup_btn">Sign up</button>
        </div>
      </>
    );
  }
}

// function App() {
//   return (
//   );
// }

export default Signup;
