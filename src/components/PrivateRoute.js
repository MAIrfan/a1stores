import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export const useAuth = () =>{
  return false;
}
