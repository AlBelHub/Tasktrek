import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  setOpenCard: Function;
  cardID: string;
  BlockID: string;
}

export const CardOverlay = ({ setOpenCard }: Props) => {
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
            smth smth smth
            <span className="edit-icon edit-icon_m-p"></span>
          </div>
          <div className="tags-container">
            <span className="tag border border_radius">Danger!</span>
            <span className="tag border border_radius">Hurry!</span>
            <span className="tag border border_radius">Overdue</span>
            <span className="tag border border_radius">Example</span>
            <span className="tag button button_font button_radius button_m-p">
              Edit tags
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
