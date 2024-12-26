import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShirtGrid from "./components/ShirtGrid";
import MappingList from "./components/MappingList";
import data from "./data.json";

function App() {
  let shirtMappingRoutes = [];
  for (let shirtID of Object.keys(data))
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
