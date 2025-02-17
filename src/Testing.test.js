import {render, screen} from "@testing-library/react";
import Booking from './Booking';

describe("BookingForm HTML5 Validation", () => {
    test('Renders the BookingForm heading', () => {
        render(<Booking />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })

    test('Date input field has the required attribute', () => {
        render(<Booking availableTimes={[]} dispatch={() => {}} submitForm={() => {}}/>);
        const dateInput = screen.getByLabelText(/Choose date/i);
        expect(dateInput).toHaveAttribute("required");
    })

    test("Time dropdown has the required attribute", () => {
        render(<Booking availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
        const timeSelect = screen.getByLabelText(/Choose time/i);
        expect(timeSelect).toHaveAttribute("required");
      });
    
      test("Guest input field has min and max attributes", () => {
        render(<Booking availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
        const guestInput = screen.getByLabelText(/Number of guests/i);
        expect(guestInput).toHaveAttribute("min", "1");
        expect(guestInput).toHaveAttribute("max", "10");
      });
    
      test("Occasion dropdown has the required attribute", () => {
        render(<Booking availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
        const occasionSelect = screen.getByLabelText(/Occassion/i);
        expect(occasionSelect).toHaveAttribute("required");
      });
})