import React from "react";
import ClothingItem from "./ClothingItem";

function Mapping({ shirtID, pantID, okayForOffice, okayForBaher }) {
  return (
    <div>
      <ClothingItem type="shirt" id={shirtID} />
      <ClothingItem type="pant" id={pantID} />
      <p>
        Office: {getEmoji(okayForOffice)}
        <br />
        Baher: {getEmoji(okayForBaher)}
      </p>
    </div>
  );
}

function getEmoji(boolean) {
  if (boolean) {
    return "✅";
  }
  return "❌";
}

export default Mapping;
