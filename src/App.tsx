import React, { SyntheticEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlock } from "./store/basicActionsSlice.tsx";

import Block from "./Block.tsx";
import { RootState } from "./store/store.tsx";
import { AddInput } from "./AddInput.tsx";

import "./main.scss";

function App() {
  const CardState = useSelector(
    (state: RootState): any => state.basicAction.values
  );

  const dispatch = useDispatch();

  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleWheel = (e: SyntheticEvent) => {
    scrollContainer.current.scrollLeft += e.deltaY;
  };

  return (
    <>
      <div className="menu__container">
        <p className="menu__text">Название доски</p>
      </div>
      <div
        className="blocks-container no-select"
        ref={scrollContainer}
        onWheel={(e) => handleWheel(e)}
      >
        {CardState.map((block) => {
          return (
            <Block
              key={block.id}
              parentBlockId={block.id}
              header={block.header}
              cards={block.cards}
            />
          );
        })}
        <AddInput CardState={CardState} />
      </div>
    </>
  );
}

export default App;
