import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import createMockRouter from "../utils/test-utils/createMockRouter";
import { RouterContext } from "next/dist/next-server/lib/router-context";

describe("languageSwitcher", () => {
    it("render languageSwitcher component", () => {
        render(
            <RouterContext.Provider value={createMockRouter({})}>
                <LanguageSwitcher />w
            </RouterContext.Provider>
        );
        expect(screen.getByRole("languageSwitcher", {})).toBeInTheDocument();
    });
});