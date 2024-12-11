import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Reservations } from "./Reservations.jsx";

describe("Página de Reservas", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test("Debería tener una o más opciones de horarios de reserva disponibles.", async () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId("booking-time-option");

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test("Debería actualizar las opciones de horarios de reserva disponibles al cambiar la fecha de reserva.", async () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    const bookingDate = "2023-04-01";
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});
