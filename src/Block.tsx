import React from "react";
import { useState, useRef, useEffect } from "react";
import { Card } from "./Card";
import { RootState } from "./store/store.tsx";
import { addCard } from "./store/basicActionsSlice.tsx";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

interface Props {
  header: string;
  parentBlockId: string;
}

const Block = ({ header, parentBlockId }: Props) => {
  const [card, setCard] = useState([1]);
  const [cardHeader, setCardHeader] = useState("");
  const [visible, setVisible] = useState(false);

  const handleShowCardInput = () => {
    setVisible(!visible);
  };

  const handleAddButton = () => {
    setVisible(!visible);
    dispatch(
      addCard({
        id: nanoid(4),
        header: cardHeader,
        parentBlockId: parentBlockId,
      })
    );
  };

  const CardStore = useSelector(
    (state: RootState): any => state.basicAction.values
  );

  const dispatch = useDispatch();

  return (
    <>
      <div className="block block_m-p block_bg border">
        <div className="block__header">{header}</div>
        {CardStore[
          CardStore.findIndex((el) => el.id === parentBlockId)
        ].cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              header={card.header}
              BlockID={parentBlockId}
            />
          );
        })}

        <button
          className="button button_font"
          style={visible ? { display: "none" } : { display: "block" }}
          onClick={() => handleShowCardInput()}
        >
          Add card
        </button>
        {visible && (
          <div style={visible ? { display: "block" } : { display: "none" }}>
            <input
              type="text"
              className="input"
              onKeyDown={(e) => {
                e.key === "Enter" ? handleAddButton() : false;
              }}
              onChange={(e) => setCardHeader(e.target.value)}
            />

            <button
              className="button button_border button_font button_m-p"
              onClick={() => {
                handleAddButton();
              }}
            >
              Add new card
            </button>
            <button className="button button_font" onClick={() => setVisible(!visible)}>close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Block;
