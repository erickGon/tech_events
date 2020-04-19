import isStringEmpty from "../services/isStringEmpty";

test("is string empty", () => {
  const text = "";
  const result = isStringEmpty(text);
  expect(result).toBeFalsy();
});
