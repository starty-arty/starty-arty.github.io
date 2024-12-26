import React from "react";
import chimniOnlyShirts from "../data/chimni-only-shirts.json";

function ClothingItem({ type, id }) {
  let image = require(`../images/${type}${id}.jpg`);
  let imageTag = <img src={image} style={{ height: "20vh", width: "20wh" }} />;

  if (type === "shirt") {
    // TODO add red border if chimniOnlyShirts.contains(id)

    return <a href={`./#/${id}`}>{imageTag}</a>;
  }
  return imageTag;
}

export default ClothingItem;
