import { render, screen, fireEvent } from "@testing-library/react";
import JobPostingPage from "../Pages/AdminJobFormPage"; // Update the path based on your file structure
import { MemoryRouter } from "react-router-dom";

describe("Job Posting Page", () => {
    it("renders the job posting form", () => {
        render(
            <MemoryRouter>
                <JobPostingPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText(/job title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/salary/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
        expect(screen.getByText(/post job/i)).toBeInTheDocument();
    });

    it("shows an error message for missing required fields", () => {
        render(
            <MemoryRouter>
                <JobPostingPage />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText(/post job/i));
        expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
    });

    it("submits the form with valid data", () => {
        const mockPostJob = jest.fn();
        render(
            <MemoryRouter>
                <JobPostingPage onPostJob={mockPostJob} />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText(/job title/i), { target: { value: "Carpenter" } });
        fireEvent.change(screen.getByLabelText(/description/i), {
            target: { value: "Looking for a skilled carpenter." },
        });
        fireEvent.change(screen.getByLabelText(/salary/i), { target: { value: "1500" } });
        fireEvent.change(screen.getByLabelText(/location/i), { target: { value: "Delhi" } });
        fireEvent.click(screen.getByText(/post job/i));

        expect(mockPostJob).toHaveBeenCalledWith({
            title: "Carpenter",
            description: "Looking for a skilled carpenter.",
            salary: "1500",
            location: "Delhi",
        });
    });
});
