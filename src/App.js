import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ShirtGrid from "./components/ShirtGrid";
import MappingList from "./components/MappingList";
import mappings from "./data/mappings.json";

function App() {
  let shirtMappingRoutes = [];
  for (let shirtID of Object.keys(mappings))
    shirtMappingRoutes.push(
      <Route
        path={`/${shirtID}`}
        element={<MappingList shirtID={shirtID} />}
        key={shirtID}
      />
    );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShirtGrid />} />
        {shirtMappingRoutes}
      </Routes>
    </Router>
  );
}

export default App;
