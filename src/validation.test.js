import { validateForm } from "./validation";


describe("Form Validation", () => {
    test("Returns errors when required fields are empty", () => {
      const errors = validateForm({ date: "", time: "", guests: 0 });
  
      expect(errors.date).toBe("Please select a date.");
      expect(errors.time).toBe("Please select a time.");
      expect(errors.guests).toBe("Guests must be between 1 and 10.");
    });
  
    test("Returns no errors for valid input", () => {
      const errors = validateForm({ date: "2025-02-12", time: "18:00", guests: 5 });
  
      expect(errors).toEqual({});
    });
  
    test("Returns error when guests are below 1", () => {
      const errors = validateForm({ date: "2025-02-12", time: "18:00", guests: 0 });
  
      expect(errors.guests).toBe("Guests must be between 1 and 10.");
    });
  
    test("Returns error when guests are above 10", () => {
      const errors = validateForm({ date: "2025-02-12", time: "18:00", guests: 11 });
  
      expect(errors.guests).toBe("Guests must be between 1 and 10.");
    });
  });