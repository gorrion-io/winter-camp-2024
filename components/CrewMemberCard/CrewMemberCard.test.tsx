import React from "react";
import { render, screen } from "@testing-library/react";
import CrewMemberCard from "./CrewMemberCard";
import "@testing-library/jest-dom";

describe("CrewMemberCard", () => {
  const mockCrewMember = {
    fullName: "John Doe",
    age: 30,
    nationality: "Canada",
    profession: "engineer",
  };

  it("renders correctly with given crew member details", () => {
    render(<CrewMemberCard crewMember={mockCrewMember} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
    expect(screen.getByText("engineer")).toBeInTheDocument();
  });

  it("displays the correct icon for a profession", () => {
    render(<CrewMemberCard crewMember={mockCrewMember} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveAttribute("data-icon", "wrench");
  });

  it("displays the default user icon for an unrecognized profession", () => {
    const unknownProfessionMember = {
      ...mockCrewMember,
      profession: "unknown",
    };
    render(<CrewMemberCard crewMember={unknownProfessionMember} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toHaveClass("fa-user");
  });
});
