import TestRenderer from "react-test-renderer";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When its rendered", () => {
    test("Then it should always match this snapshot", () => {
      const renderedNotFoundPage = TestRenderer.create(<NotFoundPage />);

      expect(renderedNotFoundPage).toMatchSnapshot();
    });
  });
});
