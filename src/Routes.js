import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Tweets from "./Pages/Tweets/Tweets";
// css도 다 바꾸기

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tweets" component={Tweets} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
