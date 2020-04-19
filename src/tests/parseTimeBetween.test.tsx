import parseTimeBetween from "../services/parseTimeBetween";

test("Time interval", () => {
  const start = "2019-07-14T02:00:00+00:00";
  const end = "2019-07-14T03:30:00+00:00";
  const timeBetween = parseTimeBetween(start, end);
  expect(timeBetween).toBe("1 h 30 min");
});
