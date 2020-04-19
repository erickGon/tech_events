import * as React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders app", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/tech events/i);
  expect(linkElement).toBeInTheDocument();
});
