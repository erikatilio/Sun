import React from "react";
import ListWindowItem from "../ListWindowItem/ListWindowItem";
import list from "../../data/data";

export default function Building(props) {
  const listWindow = list;

  return (
    <div className="container">
      <ListWindowItem
        listWindow={listWindow}
        activedLight={props.lights}
      />
    </div>
  );
}
