import React from "react";

export default function WindowItem(props) {
  return (
    <div className="col mb-3 rounded">
      <li className="list-group-item list-group-item-info">
        <i className="far fa-window-maximize"></i> {props.text}
      </li>
    </div>
  );
}
