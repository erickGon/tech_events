import eventType from "@/types/event";

const hasSingUp = (event: eventType) => {
  let pass = true;

  const myEvents = JSON.parse(localStorage.getItem("myEvents") || "[]");

  myEvents.forEach((item: eventType) => {
    if (item.id === event.id) {
      pass = false;
    }
  });

  return pass;
};

export default hasSingUp;
