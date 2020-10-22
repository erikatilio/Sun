import React, { useState, useEffect } from "react";

import DigitalClock from "../DigitalClock/DigitalClock";
import Building from "../Building/Building";
import ApiService from "../../API/ApiService";
import CalculatePeriodDay from "../../utils/CalculatePeriodDay";
import FormateAMPM from "../../utils/FormateAMPM";

export default function Home() {
  const [activeLights, setActiveLights] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        ApiService.getTimeApi(
          `lat=${position.coords.latitude}&lng=${position.coords.longitude}`
        ).then((res) => {
          setActiveLights(
            CalculatePeriodDay(FormateAMPM(new Date()), res.sunrise, res.sunset)
          );
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

  return (
    <div className="container mt-5">
      <DigitalClock />
      <Building lights={activeLights} />
    </div>
  );
}
