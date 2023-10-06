import React, { SyntheticEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "./store/store";
import { addTag } from "./store/basicActionsSlice";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  setOpenCard: Function;
  cardID: string;
  BlockID: string;
  blockIndex: number;
  cardIndex: number;
}

export const CardOverlay = ({
  setOpenCard,
  cardID,
  BlockID,
  blockIndex,
  cardIndex,
}: Props) => {
  const dispatch = useDispatch();

  const CardStore = useSelector(
    (state: RootState): any => state.basicAction.values
  );

  const Tags = CardStore[blockIndex].cards[cardIndex].tags;

  const handleEditTag = (e: SyntheticEvent) => {
    e.stopPropagation();
    dispatch(
      addTag({
        text: "123",
        cardID: cardID,
        color: "#999999",
        blockId: BlockID,
      })
    );
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          onClick={() => setOpenCard(false)}
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="overlay__container overlay__header overlay__header_font overlay__header_m-p">
            {CardStore[blockIndex].cards[cardIndex].header}
            <span className="edit-icon edit-icon_m-p"></span>
          </div>
          <div className="tags-container">
            <span className="tag border border_radius">Danger!</span>
            <span className="tag border border_radius">Hurry!</span>
            <span className="tag border border_radius">Overdue</span>
            <span className="tag border border_radius">Example</span>
            {Tags.map((el, i) => (
              <div
                style={{ backgroundColor: el.color }}
                key={i}
                className="tag border border_radius"
              >
                {el.text}
              </div>
            ))}
            <span
              onClick={(e) => handleEditTag(e)}
              className="tag button button_font button_radius button_m-p"
            >
              Edit tags
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
