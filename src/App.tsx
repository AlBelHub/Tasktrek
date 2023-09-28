import React, { SyntheticEvent, useState } from 'react';
import {
  Reorder, calcLength,
} from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addBlock, deleteBlock } from "./store/basicActionsSlice.tsx";
import Block from './Block.tsx';
import "./App.css";
import { RootState } from "./store/store.tsx";

function App() {

  const [header, setHeader] = useState("");

  const id = 2;

  const count = useSelector((state: RootState):any => state.basicAction.values);
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setHeader(e.target.value);
  }

  return (
    <>
      <div className="">
        <div className="button" onClick={() => dispatch(addBlock(id + 1, header))}>ADD</div>
        <div className="button" onClick={() => dispatch(deleteBlock())}>DELETE</div>
        <input className="button" onChange={(e) => handleInput(e)}/>
        <div className="text">Count: {count.length}</div>
        <Reorder.Group 
        axis="x"
        values={count}
        onReorder={count}
        className="app-container list-style"
        >
          {count.map((item: number) => {
            return (
              <Block key={item} item={item}/>
            );
          })}
        </Reorder.Group>
      </div>
    </>
  );
}

export default App;
