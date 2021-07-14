import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const PrivateRoute = ({ path, ...props }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token ? (
    <Route {...props} path={path}></Route>
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
