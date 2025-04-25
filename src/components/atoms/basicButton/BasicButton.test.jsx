import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest"; 
import BasicButton from "../basicButton";
import '@testing-library/jest-dom';

describe("BasicButton", () => {
  it("renders the button with correct text", () => {
    render(<BasicButton />);
    const buttonElement = screen.getByRole("button", { name: /get weather/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const handleClick = vi.fn(); 
    render(<BasicButton onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /get weather/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
