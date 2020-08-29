import React from "react";
import WindowItem from "../WindowItem/WindowItem";

export default function ListWindowItem(props) {
  const listItems = props.listWindow.map((item, index) => (
    <WindowItem key={index} title={item} valueLight={props.activedLight} />
  ));
  return <div className="row row-cols-3">{listItems}</div>;
}
