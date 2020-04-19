import events from "../mocks/events";
import filterFree from "../services/filterFree";

test("Filter free events", () => {
  const freeEvents = filterFree(events);
  expect(freeEvents).toHaveLength(15);
});
