import * as React from "react";
import { render } from "@testing-library/react";
import Loader from "../components/Loader/Loader";

test("Loader show", () => {
  const { getByAltText } = render(<Loader show={true} />);
  const isLoaderThere = getByAltText("logo");
  expect(isLoaderThere).toBeInTheDocument();
});
