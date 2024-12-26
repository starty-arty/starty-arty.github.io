import React from "react";

function ClothingItem({ type, id }) {
  let image = require(`../images/${type}${id}.jpg`);
  let imageTag = <img src={image} />;

  if (type === "shirt") {
    return <a href={`./#/${id}`}>{imageTag}</a>;
  }
  return imageTag;
}

export default ClothingItem;
