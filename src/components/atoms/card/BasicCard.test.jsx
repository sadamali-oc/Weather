import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom';
import BasicCard from "../card";

describe("BasicCard", () => {
  it("renders the BasicCard with children", () => {
    render(<BasicCard>Test Content</BasicCard>);
    const cardElement = screen.getByText(/Test Content/i);
    expect(cardElement).toBeInTheDocument();
  });


});
