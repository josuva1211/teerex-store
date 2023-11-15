import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Main from "../Main"
import appStore from "../../utils/appStore";


describe("testing Main test cases", () => {
    it("should load test component", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Main />
                </Provider>
            </BrowserRouter>
        )

        const inputElement = screen.getByPlaceholderText("Search for products...");

        expect(inputElement).toBeInTheDocument();
    })
})