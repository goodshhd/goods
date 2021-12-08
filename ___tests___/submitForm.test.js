import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import SubmitForm from "../components/SubmitForm";
import {RecoilRoot} from "recoil";

describe("SubmitForm", () => {
    it('render SubmitForm component', () => {
        render(
            <RecoilRoot>
                <SubmitForm />
            </RecoilRoot>
        );
        expect(screen.getByRole('submit-form', {})).toBeInTheDocument()
    })
});