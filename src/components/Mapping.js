import React from "react";
import ClothingItem from "./ClothingItem";

function Mapping({
  shirtID,
  pantID,
  okayForOffice,
  okayForBaher,
  okayForChimni,
}) {
  return (
    <div>
      <ClothingItem type="shirt" id={shirtID} />
      <ClothingItem type="pant" id={pantID} />
      <p>
        Office: {getEmoji(okayForOffice)}
        <br />
        Baher: {getEmoji(okayForBaher)}
        <br />
        Chimni: {getEmoji(okayForChimni)}
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
