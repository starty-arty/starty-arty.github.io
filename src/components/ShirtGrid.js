import React from "react";
import data from "../data.json";
import ClothingItem from "./ClothingItem";

function ShirtGrid() {
  const clothingItems = [];
  for (let shirtID of Object.keys(data))
    clothingItems.push(
      <ClothingItem type="shirt" id={shirtID} key={shirtID} />
    );

  return <div>{clothingItems}</div>;
}

export default ShirtGrid;
