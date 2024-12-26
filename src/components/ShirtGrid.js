import React from "react";
import mappings from "../data/mappings.json";
import ClothingItem from "./ClothingItem";

function ShirtGrid() {
  const clothingItems = [];
  for (let shirtID of Object.keys(mappings))
    clothingItems.push(
      <ClothingItem type="shirt" id={shirtID} key={shirtID} />
    );

  return <div>{clothingItems}</div>;
}

export default ShirtGrid;
