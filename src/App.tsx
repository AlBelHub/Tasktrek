import { useState } from "react";
import {
  useDragControls,
  Reorder,
} from "framer-motion";
import Block from './Block.tsx';
import "./App.css";

function App() {
  const [blocks, setBlocks] = useState([0, 1, 2]);
  const [id, setId] = useState(3);


  const handleClick = () => {
    setBlocks(
      [
        ...blocks,
        id + 1,
      ]
    )
    setId(id+1);
  }

  return (
    <>
      <div className="">
        <div className="button" onClick={() => handleClick()}>ADD</div>
        <Reorder.Group 
        axis="x" 
        values={blocks} 
        onReorder={setBlocks}
        className="app-container list-style"
        >
          {blocks.map((item) => {
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
