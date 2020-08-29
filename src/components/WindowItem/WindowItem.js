import React, { useState } from "react";

export default function WindowItem(props) {
  const [activedLi, setLiValue] = useState(props.valueLight);

  function changeColor() {
    setLiValue(!activedLi);
  }

  let li_class = activedLi
    ? "border mb-3 list-group-item list-group-item-action list-group-item-primary text-center"
    : "border mb-3 list-group-item list-group-item-action text-center";

  return (
    <li
      className={li_class}
      onClick={() => {
        changeColor();
      }}
    >
      <i className="far fa-window-maximize"></i> {props.title}
    </li>
  );
}
