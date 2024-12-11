import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Reservations } from "./components/pages/Reservations/Reservations.jsx";
import { BookingForm } from "./components/pages/Reservations/BookingForm.jsx";

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

describe("Formulario de Reserva", () => {
  const availableTimes = ["17:00", "17:30"];
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("Debería renderizar correctamente todos los campos y sus valores predeterminados", async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId("booking-time-option");
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(
      `booking-occasion-option`
    );
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "booking-date");
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "booking-time");
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute("id", "booking-number-guests");
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "booking-occasion");
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("Debería enviar el formulario con éxito con los valores predeterminados", () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "Birthday",
    });
  });

  test("Debería mostrar un mensaje de error y desactivar el botón de envío cuando el campo de fecha esté vacío", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please choose a valid date");
    expect(submitButton).toBeDisabled();
  });

  test("Debería mostrar un mensaje de error y desactivar el botón de envío cuando el campo del número de invitados esté vacío", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    fireEvent.blur(numberOfGuestsInput);
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Please enter a number between 1 and 10"
    );
    expect(submitButton).toBeDisabled();
  });
});
