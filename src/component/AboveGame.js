import React from "react";

function AboveGame() {
  return (
    <>
      <div className="above-game">
        <p className="game-intro">
          Join the tiles, get to <strong>2048!</strong>
          <br />
          <a href="javascript:void(0)" className="how-to-play-link">
            How to play →
          </a>
        </p>
        <a className="restart-button">New Game</a>
      </div>
    </>
  );
}

export default AboveGame;
