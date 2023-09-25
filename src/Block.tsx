import React from "react";
import { useState } from "react";
import { useMotionValue, useDragControls, Reorder } from "framer-motion";
import CardHeader from "./CardHeader";

interface Props {
  item: number;
}

const Block = ({ item }: Props) => {
  const [card, setCard] = useState([0, 1, 2, 3, 4]);

  const dragControls = useDragControls();

  return (
    <>
      <Reorder.Item
        value={item}
        dragListener={false}
        dragControls={dragControls}
        className="basic-container basic-border basic-m-p"
        key={item}
      >
        <CardHeader dragControls={dragControls} />
        <Reorder.Group axis="y" values={card} onReorder={setCard}>
          {card.map((card) => {
            return (
              <Reorder.Item
                key={card}
                value={card}
                className="basic-m-p basic-border list-style"
              >
                {card}
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </Reorder.Item>
    </>
  );
};

export default Block;
