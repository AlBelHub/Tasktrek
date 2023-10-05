import React, { SyntheticEvent } from "react";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBlock } from "./store/basicActionsSlice";
import { RootState } from "./store/store";
import { nanoid } from "nanoid";

interface Props {}

export const AddInput = (CardState: RootState) => {
  const [visible, setVisible] = useState(false);
  const [header, setHeader] = useState("");

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddButton = (e: SyntheticEvent) => {
    if (header.length === 0) {
      return;
    } else {
      dispatch(addBlock({ id: nanoid(4), header: header }));
      setHeader("");
      inputRef.current.value = "";
    }
  };

  return (
    <div
      className={
        "add-button add-button_m-p " + (visible ? "add-button_show" : "")
      }
      onClick={() => setVisible(!visible)}
    >
      <span style={visible ? { display: "none" } : { display: "block" }}>
        ADD
      </span>
      {visible && (
        <div>
          <input
            className="input"
            autoFocus
            ref={inputRef}
            id="BlockNameInput"
            type="text"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              e.key === "Enter" ? handleAddButton(e) : false;
            }}
            onChange={(e) => {
              setHeader(e.target.value);
            }}
            placeholder="Введите название..."
          />
          <div className="buttons">
            <button
              className="button button_m-p button_font button_border"
              onClick={(e) => handleAddButton(e)}
            >
              Add card
            </button>
            <button
              className="button button_m-p button_font button_border"
              onClick={() => setVisible(!visible)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
