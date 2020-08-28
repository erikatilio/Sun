import React from "react";
import "./SwitchButton.css";

export default function SwitchButton() {
  return (
    <div className="ml-3 mt-3">
      <h3 className="mb-3">Ligar todas as luzes?</h3>
      <div className="switchToggle">
        <input type="checkbox" id="switch" />
        <label htmlFor="switch"></label>
      </div>
    </div>
  );
}
