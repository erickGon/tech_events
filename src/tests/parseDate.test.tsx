import parseDate from "../services/parseDate";

test("Format date", () => {
  const date = "2019-06-09T21:30:00+00:00";
  const dateFormated = parseDate(date, "YYYY-MM-DD");
  expect(dateFormated).toBe("2019-06-09");
});
