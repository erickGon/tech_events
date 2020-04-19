const months = [
  {
    abbreviation: "Jan",
    name: "January"
  },
  {
    abbreviation: "Feb",
    name: "February"
  },
  {
    abbreviation: "Mar",
    name: "March"
  },
  {
    abbreviation: "Apr",
    name: "April"
  },
  {
    abbreviation: "May",
    name: "May"
  },
  {
    abbreviation: "Jun",
    name: "June"
  },
  {
    abbreviation: "Jul",
    name: "July"
  },
  {
    abbreviation: "Aug",
    name: "August"
  },
  {
    abbreviation: "Sep",
    name: "September"
  },
  {
    abbreviation: "Oct",
    name: "October"
  },
  {
    abbreviation: "Nov",
    name: "November"
  },
  {
    abbreviation: "Dec",
    name: "December"
  }
];

const daysOfWeek = [
  {
    abbreviation: "Mon",
    name: "Monday"
  },
  {
    abbreviation: "Tue",
    name: "Tuesday"
  },
  {
    abbreviation: "Wed",
    name: "Wednesday"
  },
  {
    abbreviation: "Thu",
    name: "Thursday"
  },
  {
    abbreviation: "Fri",
    name: "Friday"
  },
  {
    abbreviation: "Sat",
    name: "Saturday"
  },
  {
    abbreviation: "Sun",
    name: "Sunday"
  }
];

const ordinalNumber = {
  1: "st",
  2: "nd",
  3: "rd",
  21: "st",
  22: "nd",
  23: "rd"
};

const formater = (date: Date, format: string) => {
  let dateFormated = "Invalid date";

  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const dayOfWeek = date.getDay();
  const dayName = daysOfWeek[dayOfWeek].name;

  const dayOrdinal = ordinalNumber[day] ? ordinalNumber[day] : "th";

  const month = date.getMonth();
  const monthWithCero = month > 9 ? month + 1 : `0${month + 1}`;
  const monthName = months[month].name;

  const year = date.getFullYear();

  const hours: number | string =
    date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const min = date.getMinutes() === 0 ? "00" : date.getMinutes();

  const formats = {
    "Do MMMM": `${day}${dayOrdinal} ${monthName}`,
    "HH:mm": `${hours}:${min}`,
    "YYYY-MM-DD": `${year}-${monthWithCero}-${day}`,
    "dddd Do MMMM": `${dayName} ${day}${dayOrdinal} ${monthName}`
  };

  dateFormated = formats[format];

  return dateFormated;
};

const parseDate = (date: string, format: string) => {
  let dateObject = new Date(date);

  const userTimezoneOffset = dateObject.getTimezoneOffset() * 60000;

  dateObject = new Date(dateObject.getTime() + userTimezoneOffset);

  const dateFormated = formater(dateObject, format);

  return dateFormated;
};

export default parseDate;
