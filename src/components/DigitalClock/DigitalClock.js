import React, { useState } from "react";

export default function DigitalClock() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  return <h1 className="mb-5">{ctime}</h1>;
}
