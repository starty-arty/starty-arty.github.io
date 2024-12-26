import React from "react";
import mappings from "../data/mappings.json";
import Mapping from "./Mapping";

function MappingList({ shirtID }) {
  let mappingList = [];
  for (let mapping of mappings[shirtID])
    mappingList.push(
      <Mapping
        shirtID={shirtID}
        pantID={mapping.pantID}
        okayForOffice={mapping.okayForOffice}
        okayForBaher={mapping.okayForBaher}
        key={mapping.pantID}
      />
    );

  return <div>{mappingList}</div>;
}

export default MappingList;
