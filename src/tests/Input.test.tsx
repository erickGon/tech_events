import * as React from "react";
import { render } from "@testing-library/react";
import Input from "../components/Input/Input";

test("Input props", () => {
  const { getByDisplayValue, getByPlaceholderText } = render(
    <Input
      name="test"
      placeholder="test"
      type="text"
      handleChange={(text: string) => text}
    />
  );
  const value = getByDisplayValue("");
  const placeholderValue = getByPlaceholderText("test");
  expect(value).toBeInTheDocument();
  expect(placeholderValue).toBeInTheDocument();
});
