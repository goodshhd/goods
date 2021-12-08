import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import MobileMenu from "../components/MobileMenu";
import createMockRouter from "../utils/test-utils/createMockRouter";
import {RouterContext} from "next/dist/next-server/lib/router-context";
import {RecoilRoot} from "recoil";

describe("mobileMenu", () => {
    it("render mobileMenu component", () => {
        render(
            <RecoilRoot>
                <RouterContext.Provider value={createMockRouter({})}>
                    <MobileMenu />
                </RouterContext.Provider>
            </RecoilRoot>
        );
        expect(screen.getByRole("mobileMenu", {})).toBeInTheDocument();
    });
});