import events from "../mocks/events";
import cities from "../mocks/cities";
import filterByNameOrCity from "../services/filterByNameOrCity";

test("Filter by city name", () => {
  const name = "Barcelona";
  const eventsInCity = filterByNameOrCity(events, name, cities);
  expect(eventsInCity).toHaveLength(4);
});
