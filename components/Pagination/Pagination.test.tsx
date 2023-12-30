import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const mockOnPageChange = jest.fn();

  it("renders the correct number of pagination items", () => {
    render(
      <Pagination
        currentPage={4}
        onPageChange={mockOnPageChange}
        totalPages={10}
      />,
    );

    // expect 1 left arrow, first page, dots, 3 pages buttons (3,4,5),
    // dots, last page, right arrow (9 items total)
    const paginationItems = screen.getAllByRole("listitem");
    expect(paginationItems).toHaveLength(9);
  });

  it("disables the left arrow on the first page", () => {
    render(
      <Pagination
        currentPage={1}
        onPageChange={mockOnPageChange}
        totalPages={10}
      />,
    );

    const leftArrowButton = screen
      .getByTestId("pagination-back")
      .querySelector("button");
    expect(leftArrowButton).toBeDisabled();
  });

  it("disables the right arrow on the last page", () => {
    render(
      <Pagination
        currentPage={10}
        onPageChange={mockOnPageChange}
        totalPages={10}
      />,
    );

    const rightArrowButton = screen
      .getByTestId("pagination-next")
      .querySelector("button");
    expect(rightArrowButton).toBeDisabled();
  });

  it("calls onPageChange with the correct page number when a page is clicked", () => {
    render(
      <Pagination
        currentPage={3}
        onPageChange={mockOnPageChange}
        totalPages={10}
      />,
    );

    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });
});
