import eventType from "../types/event";
import hoursOfDayType from "../types/hoursOfDayType";
import timeOfDayType from "../types/timeofDay";

import parseDate from "./parseDate";

const timeOfDay: timeOfDayType = {
  afternoon: {
    end: "17:00",
    start: "12:00"
  },
  evening: {
    end: "21:00",
    start: "17:00"
  },
  morning: {
    end: "12:00",
    start: "06:00"
  },
  night: {
    end: "06:00",
    start: "21:00"
  }
};

const verifyNigthSchedule = (startTime: string) => {
  let pass = false;

  const lateNight = {
    end: "24:00",
    start: timeOfDay.night.start
  };

  const lateNightStatement =
    startTime >= lateNight.start && startTime <= lateNight.end;

  const earlyMornig = {
    end: timeOfDay.night.end,
    start: "00:00"
  };

  const earlyMornigStatement =
    startTime >= earlyMornig.start && startTime < earlyMornig.end;

  if (lateNightStatement || earlyMornigStatement) {
    pass = true;
  }

  return pass;
};

const isBetweenHours = (
  event: eventType,
  HoursBetween: hoursOfDayType,
  time: string
) => {
  let pass = false;
  const startHour = parseDate(event.startDate, "HH:mm");

  if (
    startHour >= HoursBetween.start &&
    startHour < HoursBetween.end &&
    time !== "night"
  ) {
    pass = true;
  } else if (time === "night" && verifyNigthSchedule(startHour)) {
    pass = true;
  }
  return pass;
};

const filterByTimeOfDay = (data: eventType[], time: string) => {
  const HoursBetween = timeOfDay[time];
  return data.filter(event => isBetweenHours(event, HoursBetween, time));
};

export default filterByTimeOfDay;
