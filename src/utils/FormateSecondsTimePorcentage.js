export default function FormateSecondsTimePorcentage(seconds) {
  if (seconds === "59") return "100%";
  if (seconds === "0") return "1.666666666666667%";
  else return String((parseInt(seconds) + 1) * 1.666666666666667) + "%";
}
