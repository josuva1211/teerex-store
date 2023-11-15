import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Sidebar from "../Sidebar"
import appStore from "../../utils/appStore"

describe("testing Sidebar test cases", () => {
    it("Should load sidebar component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        )

        const checkbox = screen.getAllByRole("checkbox");

        expect(checkbox.length).toBe(11);
        
    });

    it("Should load all the headings", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        )

        const heading = screen.getAllByRole("heading");

        expect(heading.length).toBe(4);
        
    });
})