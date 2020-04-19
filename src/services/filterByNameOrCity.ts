import cityType from "../types/city";
import eventType from "../types/event";

import setCityName from "./setCityName";

const filterByNameOrCity = (
  data: eventType[],
  text: string,
  cities: cityType[]
) => {
  const textFormated = text.toLowerCase();

  return data.filter(
    event =>
      event.name.toLowerCase().indexOf(textFormated) !== -1 ||
      setCityName(cities, event.city)
        .toLowerCase()
        .indexOf(textFormated) !== -1
  );
};

export default filterByNameOrCity;
