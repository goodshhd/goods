import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import Table from "../components/Table";
import {RecoilRoot} from "recoil";

describe("Table", () => {
    it('render Table component', () => {
        render(
            <RecoilRoot>
                <Table render={() => {}} />
            </RecoilRoot>
        );
        expect(screen.getByRole('table', {})).toBeInTheDocument()
    })
});