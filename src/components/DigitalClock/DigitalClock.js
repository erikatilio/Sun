import React, { useState, Fragment } from "react";
import FormateAMPM from "../../utils/FormateAMPM";
import FormateSecondsTimePorcentage from "../../utils/FormateSecondsTimePorcentage";

export default function DigitalClock() {
  let time = new Date();
  const [ctime, setCtime] = useState(FormateAMPM(time));
  const [cseconds, setCseconds] = useState(
    FormateSecondsTimePorcentage(time.getSeconds())
  );

  const updateTime = () => {
    time = new Date();
    setCtime(FormateAMPM(time));
    setCseconds(FormateSecondsTimePorcentage(time.getSeconds()));
  };

  setInterval(updateTime, 1000);

  return (
    <Fragment>
      <h1 className="display-2 mb-1">{ctime}</h1>
      <div className="progress mb-5" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: cseconds }}
        />
      </div>
    </Fragment>
  );
}
