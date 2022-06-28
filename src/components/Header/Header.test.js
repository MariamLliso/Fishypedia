import Header from "./Header";
import { render, screen } from "@testing-library/react";
import FishesDataProvider from "../../store/context/FishesDataProvider";

describe("Given an AquariumHeader component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list", () => {
      render(
        <FishesDataProvider>
          <Header />
        </FishesDataProvider>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
