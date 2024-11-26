import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";
import { AuthContext } from "../Context/AuthContext"; // Replace with your actual auth context

describe("Protected Routes", () => {
    const authValue = { isAuthenticated: true };

    it("renders Admin Job Form page for authenticated users", () => {
        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter initialEntries={["/adminjobform"]}>
                    <AllRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText(/Admin Job Form Page/i)).toBeInTheDocument();
    });

    it("redirects unauthenticated users from protected routes", () => {
        const unauthValue = { isAuthenticated: false };
        render(
            <AuthContext.Provider value={unauthValue}>
                <MemoryRouter initialEntries={["/adminjobform"]}>
                    <AllRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText(/Login/i)).toBeInTheDocument(); // Assuming unauthenticated users are redirected to login
    });
});
