import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CardOverlay } from "./CardOverlay";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";

interface Props {
  id: string;
  header: string;
  BlockID: string;
}

export const Card = ({ id, header, BlockID }: Props) => {
  const [openCard, setOpenCard] = useState(false);

  const CardStore = useSelector(
    (state: RootState): any => state.basicAction.values
  );

  const blockIndex = CardStore.findIndex((block) => block.id === BlockID);
  const cardIndex = CardStore[blockIndex].cards.findIndex(
    (card) => card.id === id
  );

  const Tags = CardStore[blockIndex].cards[cardIndex].tags;

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="card card_m-p card_border"
        onClick={() => setOpenCard(!openCard)}
      >
        <div className="card__tag-container">
          {Tags.map((el, i) => (
            <div
              style={{ backgroundColor: el.color }}
              key={i}
              className="tag border border_radius"
            >
              {el.text}
            </div>
          ))}
        </div>
        <p className="card__header">{header}</p>
        <div className="card__date">02.08</div>
      </div>
      {openCard && (
        <CardOverlay
          setOpenCard={setOpenCard}
          cardID={id}
          BlockID={BlockID}
          blockIndex={blockIndex}
          cardIndex={cardIndex}
        />
      )}
    </>
  );
};
