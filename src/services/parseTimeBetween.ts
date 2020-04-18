const parseTimeBetween = (start: string, end: string) => {
  const startDate = new Date(start);

  const endDate = new Date(end);

  const duration = endDate.getTime() - startDate.getTime();

  const durationInMin = duration/(60*1000);

  const hours = `${Math.floor(durationInMin/60)} h`;

  const minNumber = durationInMin % 60;
  
  const min =  minNumber ? `${minNumber} min` : "";

  return `${hours} ${min}`;
};

export default parseTimeBetween;
