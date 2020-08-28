import React from "react";

export default function WindowItem(props) {
  const listItems = props.listWindow.map((item, index) => (
    <li
      key={index}
      className="border mb-3 list-group-item list-group-item-action text-center"
    >
      <i className="far fa-window-maximize"></i> {item}
    </li>
  ));

  return <div className="row row-cols-3">{listItems}</div>;
}
