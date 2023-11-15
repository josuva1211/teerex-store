import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Head from "../Head";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

describe("testing Head test cases", () => {
    it("Should load Head Component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Head />
                </Provider>
            </BrowserRouter>
        )

        const heading = screen.getAllByRole("heading");

        expect(heading.length).toBe(2);

    });

    it("Should load TeerexStore Heading", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Head />
                </Provider>
            </BrowserRouter>
        )

        const teereexStore = screen.getByText(/TeeRex Store/);

        expect(teereexStore).toBeInTheDocument();

    })
});