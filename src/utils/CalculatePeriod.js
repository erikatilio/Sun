import SplitTime from "./SplitTime";

export default function calculatePeriod(timeNow, timeSunrise, timeSunset) {
  let time = SplitTime(timeNow);
  let sunrise = SplitTime(timeSunrise);
  let sunset = SplitTime(timeSunset);

  if (
    (parseInt(time[0]) <= parseInt(sunrise[0]) && time[2] === sunrise[3]) ||
    (parseInt(time[0]) >= parseInt(sunset[0]) && time[2] === sunset[3])
  )
    return true;
  else return false;
}
