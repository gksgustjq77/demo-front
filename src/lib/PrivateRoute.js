import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Redirect,
  Switch,
} from "react-router-dom";
import isLogin from "./isLogin";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page

    <Route
      {...rest}
      render={(props) =>
        true ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
