import eventType from "types/event";

const filterFree = (data: eventType[]) => {
  return data.filter(event => event.isFree);
};

export default filterFree;
