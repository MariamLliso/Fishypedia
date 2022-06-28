import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FishesDataProvider from "./store/context/FishesDataProvider";

describe("Given the App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header", () => {
      const testHeading = "Fishypedia";
      render(
        <FishesDataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FishesDataProvider>
      );

      const headerResult = screen.getByRole("heading", { level: 1 });

      expect(headerResult).toHaveTextContent(testHeading);
    });
  });
});
