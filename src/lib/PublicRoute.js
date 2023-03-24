import { BrowserRouter, Link, Route, Routes, redirect } from "react-router-dom";
import isLogin from "./isLogin";
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
