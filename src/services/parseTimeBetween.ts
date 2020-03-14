import * as moment from "moment";

const parseTimeBetween = (start: string, end: string) => {
  const startMoment = moment(start);

  const endMoment = moment(end);

  const duration = moment.duration(endMoment.diff(startMoment));

  const hours = duration.get("hours") + "h ";
  const min = duration.get("minutes") ? duration.get("minutes") + "min" : "";

  return hours + min;
};

export default parseTimeBetween;
