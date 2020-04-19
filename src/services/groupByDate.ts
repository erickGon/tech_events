import eventType from "../types/event";

import parseDate from ".//parseDate";

const groupByDate = (data: eventType[]) => {
  const dates = data.reduce((groups, event) => {
    const date = parseDate(event.startDate, "YYYY-MM-DD");
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {});

  const groupArrays = Object.keys(dates)
    .sort()
    .map(date => {
      dates[date].sort((a: eventType, b: eventType) =>
        a.startDate > b.startDate ? 1 : -1
      );
      return {
        date,
        events: dates[date]
      };
    });

  return groupArrays;
};

export default groupByDate;
