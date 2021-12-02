import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import createMockRouter from "../utils/test-utils/createMockRouter";
import { RecoilRoot } from "recoil";
import { RouterContext } from "next/dist/next-server/lib/router-context";

describe("Header", () => {
  it("render Header component", () => {
    render(
        <RecoilRoot>
          <RouterContext.Provider value={createMockRouter({})}>
           <Header />
          </RouterContext.Provider>
        </RecoilRoot>
            );
    expect(screen.getByRole("header", {})).toBeInTheDocument();
  });
});
