import ProductCard from "../ProductCard"
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mock-data/ProductCard.json";
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";

describe("should load product card component", () => {
    it("Check if 250 is present in the component", () => {
        render(
            <Provider store={appStore}>
                <ProductCard product={MOCK_DATA} />
            </Provider>
            
        )

        const price = screen.getByText(/250/);

        expect(price).toBeInTheDocument();
    })
})