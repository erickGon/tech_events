import * as moment from "moment";

const parseDate = (date: string, format: string) => {
  const dateMoment = moment(date);

  const dateFormated = dateMoment.isValid()
    ? dateMoment.format(format)
    : "invalid date";
  return dateFormated;
};

export default parseDate;
