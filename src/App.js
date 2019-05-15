import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import HotelContainer from "./containers/HotelContainer";
import HotelsContainer from "./containers/HotelsContainer";
import RestaurantContainer from "./containers/RestaurantContainer";
import RestaurantsContainer from "./containers/RestaurantsContainer";
import LoginContainer from "./containers/LoginContainer";
import SignupContainer from "./containers/SignupContainer";
// import NotFoundContainer from './containers/NotFoundContainer';
import Navigation from "./components/navigation/index.js";
import styled from "styled-components";
import Cookies from "js-cookie";
import Api from "./utils/Api";

const Container = styled.div`
  margin-top: 100px;
`;

class App extends Component {
  componentWillMount() {
    const user = Cookies.getJSON("user");
    if (user) {
      Api.setUser(user);
    }
  }

  render() {
    return (
      <Router>
        <Navigation />
        <Container>
          <Route path="/" exact={true} component={HomeContainer} />
          <Route path="/hotels" exact={true} component={HotelsContainer} />
          <Route
            path="/restaurants"
            exact={true}
            component={RestaurantsContainer}
          />
          <Route path="/hotels/:id" component={HotelContainer} />
          <Route path="/restaurants/:id" component={RestaurantContainer} />
          <Route path="/login" exact={true} component={LoginContainer} />
          <Route path="/signup" exact={true} component={SignupContainer} />
          {/* <Route path="/*" component={NotFoundContainer}/> */}
        </Container>
      </Router>
    );
  }
}

export default App;
