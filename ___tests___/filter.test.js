import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Filter from "../components/Filter";
import { RecoilRoot } from "recoil";

describe("Filter", () => {
  it("render Filer component", () => {
    render(
      <RecoilRoot>
        <Filter />
      </RecoilRoot>
    );
    expect(screen.getByRole("filter", {})).toBeInTheDocument();
  });
});
