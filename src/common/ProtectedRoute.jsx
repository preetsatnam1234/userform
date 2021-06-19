import React from "react";
import { useHistory, Route } from "react-router-dom";

let user = localStorage.getItem("user");

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  if (!user) history.push("/");
  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
};

export default ProtectedRoute;
