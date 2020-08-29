import React, { useState, useEffect } from "react";

import DigitalClock from "../DigitalClock/DigitalClock";
import Building from "../Building/Building";
import SwitchButton from "../SwitchButton/SwitchButton";
import ApiService from "../../api/ApiService";

export default function Home() {
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [activeLights, setActiveLights] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        ApiService.getTimeApi(
          `lat=${position.coords.latitude}&lng=${position.coords.longitude}`
        ).then((res) => {
          setSunrise(res.sunrise);
          setSunset(res.sunset);
          console.log(sunrise, sunset);
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  });

  function changeLights() {
    setActiveLights(!activeLights);
  }

  return (
    <div className="container mt-5">
      <DigitalClock />
      <Building lights={activeLights} />
      <SwitchButton changeLights={changeLights} />
    </div>
  );
}
