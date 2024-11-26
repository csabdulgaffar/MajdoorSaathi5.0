import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "../Pages/LoginPage"; // Update the path based on your file structure
import { MemoryRouter } from "react-router-dom";

describe("Login Page", () => {
    it("renders the login form", () => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });

    it("shows an error message for missing email or password", () => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText(/login/i));
        expect(screen.getByText(/email and password are required/i)).toBeInTheDocument();
    });

    it("calls the login function with valid credentials", () => {
        const mockLogin = jest.fn();
        render(
            <MemoryRouter>
                <LoginPage onLogin={mockLogin} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "Password123" } });
        fireEvent.click(screen.getByText(/login/i));

        expect(mockLogin).toHaveBeenCalledWith("test@example.com", "Password123");
    });
});
