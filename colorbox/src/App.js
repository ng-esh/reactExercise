import React from "react";
import BoxList from "./components/BoxList";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Color Box Maker</h1>
      <BoxList />
    </div>
  );
}

export default App;
