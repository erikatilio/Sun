import React from "react";
import WindowItem from "../WindowItem/WindowItem";

export default function Building() {
  const listWindow = [
    "Janela 01",
    "Janela 02",
    "Janela 03",
    "Janela 04",
    "Janela 05",
    "Janela 06",
    "Janela 07",
    "Janela 08",
    "Janela 09",
    "Janela 10",
    "Janela 11",
    "Janela 12",
  ];
  
  return (
    <div className="container">
      <WindowItem listWindow={listWindow.reverse()} />
    </div>
  );
}
