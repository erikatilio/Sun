import SplitTime from "./SplitTime";

export default function calculatePeriodDay(timeNow, timeSunrise, timeSunset) {
  let time = SplitTime(timeNow);
  let sunrise = SplitTime(timeSunrise);
  let sunset = SplitTime(timeSunset);

  if (time[2] === "AM") {
    return parseInt(time[0]) <= parseInt(sunrise[0]) ? true : false;
  }
  if (time[2] === "PM") {
    return parseInt(time[0]) >= parseInt(sunset[0]) ? true : false;
  }
}
