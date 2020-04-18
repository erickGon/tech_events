import eventType from "@/types/event";
import hoursOfDayType from "@/types/hoursOfDayType";
import timeOfDayType from "@/types/timeofDay";

import parseDate from "@/services/parseDate"

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
}

const isBetweenHours = (event: eventType, HoursBetween: hoursOfDayType) => {
  let pass = false; 
  const startHour = parseDate(event.startDate, "HH:mm");
  const endHour = parseDate(event.endDate, "HH:mm");
  console.log("isBetweenHours: ", startHour, endHour, HoursBetween);
  // TODO: CHECK when it is nigth.
  if(startHour >= HoursBetween.start && (endHour < HoursBetween.end || isNight())) {
    pass = true;
  }
  return pass; 
}

  const filterByTimeOfDay = (data: eventType[], time: string) => {
    const HoursBetween = timeOfDay[time];
    return data.filter(
      event =>
        isBetweenHours(event, HoursBetween)
      );
  }

  export default filterByTimeOfDay;