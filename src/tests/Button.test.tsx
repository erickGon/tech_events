import * as React from "react";
import { render } from "@testing-library/react";
import Button from "../components/Button/Button";

test("Button props", () => {
  const { getByText } = render(<Button text="test" />);
  const text = getByText(/test/i);
  expect(text).toBeInTheDocument();
});
