import React, { useState } from "react";

export default function Calculator() {
  let button = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "x",
    "9",
    "10",
    "/",
  ];

  const[calVal,setCalVal]=useState("")

  function handleClick(e){
  setCalVal(e.target.value)
  }
  

  return (
    <div>
      <h1>Calculator</h1>
      <input type="text" readOnly value={calVal} />
      {button.map((btn) => (
        <button onClick={handleClick}> {btn} </button>
      ))}
      {calVal}
    </div>
  );
}
