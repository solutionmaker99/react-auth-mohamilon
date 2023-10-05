import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loader, user } = useContext(AuthContext);
  if (loader) {
    return (
      <span className="loading loading-spinner text-secondary text-xl"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
