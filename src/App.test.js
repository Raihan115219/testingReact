import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { UserContextProvider } from "./context/userContext";

test("renders CheckUser component in App", () => {
  render(
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
  const checkUserElement = screen.getByTestId("checkUserComponent");
  expect(checkUserElement).toBeInTheDocument();
});
