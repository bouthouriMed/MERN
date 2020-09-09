import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";
import { Container } from "reactstrap";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Signin from "./components/auth/Signin";
import { useSelector } from "react-redux";

import { loadUser } from "./actions/authActions";
import { connect } from "react-redux";
import Loader from "./components/Loader";

function App(props) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    props.loadUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <Container>
          <Loader/>
          <Route
            path="/login"
            render={() =>
              isAuthenticated !== true ? <Login /> : <Redirect to="/" />
            }
          />
          <Route
            path="/signin"
            render={() =>
              isAuthenticated !== true ? <Signin /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated === true ? <Home /> : <Redirect to="/login" />
            }
          />
        </Container>
      </div>
    </Router>
  );
}

export default connect(null, { loadUser })(App);
