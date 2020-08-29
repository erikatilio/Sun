export default function FormatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours > 12 ? "PM" : "AM";

  hours = hours > 12 ? hours - 12 : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
}
