export const formatTimeAmPm = (time24h) => {
  let splitTime = time24h.split(":");
  let hours = Number(splitTime[0]);
  let minutes = Number(splitTime[1]);

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  const amPm = hours >= 12 ? "PM" : "AM";
  if (hours > 12) {
    hours -= 12;
  }
  return `${hours}:${minutes} ${amPm}`;
};
