import { render, screen, fireEvent } from "@testing-library/react";
import ApplyJobsPage from "../Pages/UserJobsPage"; // Update the path based on your file structure
import { MemoryRouter } from "react-router-dom";

describe("Apply Jobs Page", () => {
    it("renders the job listing page", () => {
        render(
            <MemoryRouter>
                <ApplyJobsPage />
            </MemoryRouter>
        );

        // Check if the page renders job listings
        expect(screen.getByText(/available jobs/i)).toBeInTheDocument();
    });

    it("displays a list of jobs", () => {
        // Mock a list of jobs for testing
        const jobs = [
            { id: 1, title: "Carpenter", location: "Delhi", salary: "1500" },
            { id: 2, title: "Plumber", location: "Mumbai", salary: "1200" },
        ];

        render(
            <MemoryRouter>
                <ApplyJobsPage jobs={jobs} />
            </MemoryRouter>
        );

        // Check if jobs are rendered
        expect(screen.getByText(/Carpenter/i)).toBeInTheDocument();
        expect(screen.getByText(/Plumber/i)).toBeInTheDocument();
    });

    it("shows job details when a job is clicked", () => {
        const jobs = [
            { id: 1, title: "Carpenter", location: "Delhi", salary: "1500" },
        ];

        render(
            <MemoryRouter>
                <ApplyJobsPage jobs={jobs} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText(/Carpenter/i));
        expect(screen.getByText(/location: Delhi/i)).toBeInTheDocument();
        expect(screen.getByText(/salary: 1500/i)).toBeInTheDocument();
    });

    it("applies to a job successfully", () => {
        const mockApplyJob = jest.fn();
        const jobs = [
            { id: 1, title: "Carpenter", location: "Delhi", salary: "1500" },
        ];

        render(
            <MemoryRouter>
                <ApplyJobsPage jobs={jobs} onApplyJob={mockApplyJob} />
            </MemoryRouter>
        );

        // Simulate clicking the "Apply" button
        fireEvent.click(screen.getByText(/apply/i));

        // Check if the mock function is called
        expect(mockApplyJob).toHaveBeenCalledWith(1); // Assuming `id` is passed when applying
        expect(screen.getByText(/application submitted successfully/i)).toBeInTheDocument();
    });

    it("displays an error message if already applied", () => {
        const jobs = [
            { id: 1, title: "Carpenter", location: "Delhi", salary: "1500", applied: true },
        ];

        render(
            <MemoryRouter>
                <ApplyJobsPage jobs={jobs} />
            </MemoryRouter>
        );

        // Try applying to a job that's already applied
        fireEvent.click(screen.getByText(/apply/i));
        expect(screen.getByText(/you have already applied for this job/i)).toBeInTheDocument();
    });
});
