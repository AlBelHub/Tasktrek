import React, { SyntheticEvent, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlock, deleteBlock } from "./store/basicActionsSlice.tsx";

import Block from "./Block.tsx";
import "./App.css";
import { RootState } from "./store/store.tsx";
import { nanoid } from "nanoid";

function App() {
  const [header, setHeader] = useState("");
  const [visible, setVisible] = useState(false);

  const CardState = useSelector(
    (state: RootState): any => state.basicAction.values
  );
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const handleAddButton = () => {
    if (header.length === 0) {
      inputRef.current.focus();
    } else {
      dispatch(addBlock({ id: nanoid(4), header: header }));
      inputRef.current.value = "";
      setHeader("");
    }
  };

  const handleWheel = (e: SyntheticEvent) => {
    console.log("handled");
    scrollContainer.current.scrollLeft += e.deltaY;
  };

  return (
    <>
      <div className="menu-container">
        <p className="text">INFO</p>
        <div className="count-TEMP">{CardState.length}</div>
        <div className="button" onClick={() => dispatch(deleteBlock())}>
          DELETE
        </div>
      </div>
      <div
        className="cards-container"
        ref={scrollContainer}
        onWheel={(e) => handleWheel(e)}
      >
        {CardState.map((card) => {
          return <Block key={card.id} header={card.header} />;
        })}

        <div
          className={"add-button " + (visible ? "show" : "")}
          onClick={() => setVisible(!visible)}
        >
          <span style={visible ? { display: "none" } : { display: "block" }}>
            ADD
          </span>
          {visible && (
            <div>
              <input
                className="input"
                type="text"
                ref={inputRef}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onKeyDown={(e) => {
                  e.key === "Enter" ? handleAddButton() : false;
                }}
                onChange={(e) => {
                  setHeader(e.target.value);
                }}
                placeholder="Введите название блока"
              />
              <div className="button" onClick={() => handleAddButton()}>
                ADD
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
