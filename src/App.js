import React from "react";
import Header from "./Header";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import MyFavoriteBooks from "./MyFavoriteBooks";
import Profile from "./Profile";
import "./App.css";

class App extends React.Component {
  render() {
    console.log("app", this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? (
                  <MyFavoriteBooks email={this.props.auth0.user.email} />
                ) : (
                  <Login />
                )}
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
