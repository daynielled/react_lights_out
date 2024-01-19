import React from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lights Out</h1>
        <p>Click on a cell to toggle between  light and dark. Try to turn off all the lights to win! Good Luck! </p>
      </header>
      <div className="GameWrapper">
        <Board nrows={5} ncols={5} chanceLightStartsOn={0.5}/>
      </div>
    </div>
  );
}

export default App;
