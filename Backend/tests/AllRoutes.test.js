import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";

describe("Public Routes", () => {
    it("renders the Home page on / route", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <AllRoutes />
            </MemoryRouter>
        );
        expect(screen.getByText(/Welcome to Majdoor Saathi/i)).toBeInTheDocument();
    });

    it("renders the Sign Up page on /Signup route", () => {
        render(
            <MemoryRouter initialEntries={["/Signup"]}>
                <AllRoutes />
            </MemoryRouter>
        );
        expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
    });
});
