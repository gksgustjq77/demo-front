import React from "react";
import logo from "./logo.svg";
import Home from "./pages/home/home";
import Join from "./pages/home/join";
import Profile from "./pages/main/profile";
import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Email from "./pages/home/email";
import Posts from "./pages/main/posts";
import PrivateRoute from "./lib/PrivateRoute";
import PublicRoute from "./lib/PublicRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute component={Home} path={"/"} exact></PrivateRoute>
          <PrivateRoute
            component={Join}
            path={"/home/join"}
            exact
          ></PrivateRoute>
          <PrivateRoute
            component={Join}
            path={"/home/join"}
            exact
          ></PrivateRoute>
          <PrivateRoute
            component={Email}
            path={"/home/email"}
            exact
          ></PrivateRoute>
          <PrivateRoute
            component={Posts}
            path={"/main/posts"}
            exact
          ></PrivateRoute>
          <PrivateRoute component={Profile} path={"/:id"} exact></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
