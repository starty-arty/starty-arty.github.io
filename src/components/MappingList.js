import React from "react";
import data from "../data.json";
import Mapping from "./Mapping";

function MappingList({ shirtID }) {
  let mappings = [];
  for (let mapping of data[shirtID])
    mappings.push(
      <Mapping
        shirtID={shirtID}
        pantID={mapping.pantID}
        okayForOffice={mapping.okayForOffice}
        okayForBaher={mapping.okayForBaher}
        okayForChimni={mapping.okayForChimni}
        key={mapping.pantID}
      />
    );

  return <div>{mappings}</div>;
}

export default MappingList;
