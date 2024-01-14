import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { UserContextProvider, useUser } from "../../context/userContext";

describe("UserContextProvider", () => {
  test("it should toggle the login status correctly", () => {
    const TestComponent = () => {
      const { isLoggedIn, login, logout } = useUser();
      return (
        <div>
          <span data-testid="status">
            {isLoggedIn ? "Logged In" : "Logged Out"}
          </span>
          <button data-testid="login-btn" onClick={login}>
            Log In
          </button>
          <button data-testid="logout-btn" onClick={logout}>
            Log Out
          </button>
        </div>
      );
    };

    const { getByTestId } = render(
      <UserContextProvider>
        <TestComponent />
      </UserContextProvider>
    );
    expect(screen.getByTestId("status").textContent).toBe("Logged Out");
    fireEvent.click(screen.getByTestId("login-btn"));
    expect(screen.getByTestId("status").textContent).toBe("Logged In");
    fireEvent.click(screen.getByTestId("logout-btn"));
    expect(screen.getByTestId("status").textContent).toBe("Logged Out");
  });
});
