import React from "react";
import Header from "./component/Header";
import AboveGame from "./component/AboveGame";
import GameContainer from "./component/GameContainer";

function App() {
  return (
    <div className="container">
      <Header />
      <AboveGame />
      <GameContainer />
    </div>
  );
}

export default App;
