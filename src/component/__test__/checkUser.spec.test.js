import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserContextProvider } from "../../context/userContext";
import CheckUser from "../CheckUser";

test("first of initial state should rendered", () => {
  render(
    <UserContextProvider>
      <CheckUser />
    </UserContextProvider>
  );

  const userStatusState = screen.getByText(/User is logged out/i);
  expect(userStatusState).toBeInTheDocument();

  const loginButton = screen.getByText(/Log In/i);
  expect(loginButton).toBeInTheDocument();

  const logoutButton = screen.getByText(/Log Out/i);
  expect(logoutButton).toBeInTheDocument();
});

test("changes user status on button click", () => {
  render(
    <UserContextProvider>
      <CheckUser />
    </UserContextProvider>
  );

  const userStatus = screen.getByText(/User is logged out/i);
  expect(userStatus).toBeInTheDocument();

  const loginButton = screen.getByText(/Log In/i);
  fireEvent.click(loginButton);

  const updatedUserStatus = screen.getByText(/User is logged in/i);
  expect(updatedUserStatus).toBeInTheDocument();

  const logoutButton = screen.getByText(/Log Out/i);
  fireEvent.click(logoutButton);

  const finalUserStatus = screen.getByText(/User is logged out/i);
  expect(finalUserStatus).toBeInTheDocument();
});
