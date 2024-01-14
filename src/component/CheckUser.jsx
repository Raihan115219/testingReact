import React from "react";
import { useUser } from "../context/userContext";

const CheckUser = () => {
  const { isLoggedIn, login, logout } = useUser();

  return (
    <div>
      <p>User is {isLoggedIn ? "logged in" : "logged out"}</p>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default CheckUser;
