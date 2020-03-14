import cityType from "types/city";

const setCityName = (cities: cityType[], id: number) => {
  let cityName = "";

  cities.forEach(city => {
    if (city.id === id) {
      cityName = city.name;
    }
  });

  return cityName;
};

export default setCityName;
