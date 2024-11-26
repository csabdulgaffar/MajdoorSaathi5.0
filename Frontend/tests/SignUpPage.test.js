import { render, screen, fireEvent } from '@testing-library/react';
import SignupForm from '../components/SignupForm'; // Your form component

describe('Signup Form', () => {
    it('should render the signup form', () => {
        render(<SignupForm />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    });

    it('should show an error message for invalid email', () => {
        render(<SignupForm />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByText(/sign up/i));

        expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
    });

    it('should submit form with valid inputs', () => {
        render(<SignupForm />);
        fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'Password123!' } });
        fireEvent.click(screen.getByText(/sign up/i));

        expect(screen.getByText(/account created successfully/i)).toBeInTheDocument();
    });
});
