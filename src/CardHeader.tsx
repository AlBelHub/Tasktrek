import React from "react";
import { DragControls } from "framer-motion";

interface Props {
  dragControls: DragControls;
}

const CardHeader = ({ dragControls }: Props) => {
  return (
    <div
      className="drag-button"
      onPointerDown={(event) => dragControls.start(event)}
    ></div>
  );
};

export default CardHeader;
