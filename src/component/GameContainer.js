import React, { useState, useEffect } from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";
import { getInitTileList } from "./util/tile";
import useMovetitle from "./hook/useMoveTitle";

function GameContainer() {
  const [tileList, setTileList] = useState(getInitTileList);
  useMovetitle();
  return (
    <>
      <div className="game-container">
        <div className="grid-container">
          {times(MAX_POS, (index) => (
            <div key={index} className="grid-row">
              {times(MAX_POS, (index2) => (
                <div key={index2} className="grid-cell"></div>
              ))}
            </div>
          ))}
        </div>
        <div className="tile-container">
          {tileList.map((item) => (
            <div
              key={item.id}
              className={`tile tile-${item.value} tile-position-${item.x}-${item.y}`}
            >
              <div className="tile-inner">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GameContainer;
