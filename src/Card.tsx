import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardOverlay } from "./CardOverlay";

interface Props {
  id: string;
  header: string;
  BlockID: string;
}

export const Card = ({ id, header, BlockID }: Props) => {
  const [openCard, setOpenCard] = useState(false);

  return (
    <>
      <div
        className="card card_m-p card_border"
        onClick={() => setOpenCard(!openCard)}
      >
        <div className="card__tag-container">
          <div className="card__tag">Важно!</div>
        </div>
        <p className="card__header">{header}</p>
        <div className="card__date">02.08</div>
      </div>
      {openCard && <CardOverlay setOpenCard={setOpenCard} />}
    </>
  );
};
