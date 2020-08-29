import React from "react";
import "./SwitchButton.css";

export default function SwitchButton(props) {
  return (
    <div className="ml-1 mt-3">
      <h3 className="mb-3">Ligar todas as luzes?</h3>
      <div className="switchToggle">
        <input
          type="checkbox"
          id="switch"
          onClick={() => {
            props.changeLights();
          }}
        />
        <label htmlFor="switch"></label>
      </div>
    </div>
  );
}
