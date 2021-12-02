import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import createMockRouter from "../utils/test-utils/createMockRouter";
import {RecoilRoot} from "recoil";

describe("Nav", () => {
  it("render Nav component", () => {
    render(
      <RecoilRoot>
        <RouterContext.Provider value={createMockRouter({})}>
          <Nav />
        </RouterContext.Provider>
      </RecoilRoot>
    );
    expect(screen.getByRole("nav", {})).toBeInTheDocument();
  });
});
