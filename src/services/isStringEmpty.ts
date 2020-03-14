const isStringEmpty = (text: string) => {
  let pass = true;

  if (
    text === "" ||
    text === " " ||
    text === null ||
    text === "undefined" ||
    text.length === 0
  ) {
    pass = false;
  }

  return pass;
};

export default isStringEmpty;
