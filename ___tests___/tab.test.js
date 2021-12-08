import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Tab from "../components/Tab";

describe("Tab", () => {
  it("render Tab component", () => {
    render(<Tab />);
    expect(screen.getByRole("tab", {})).toBeInTheDocument();
  });
});
