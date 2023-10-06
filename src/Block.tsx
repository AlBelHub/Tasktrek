import React, { SyntheticEvent } from "react";
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
  const [cardHeader, setCardHeader] = useState("");
  const [visible, setVisible] = useState(false);

  const handleShowCardInput = () => {
    setVisible(!visible);
  };

  const handleAddButton = (e: SyntheticEvent) => {
    e.preventDefault();
    setVisible(!visible);
    dispatch(
      addCard({
        id: nanoid(4),
        header: cardHeader,
        parentBlockId: parentBlockId,
        tags: [],
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
          className="button button_font button_border button_m-p"
          style={visible ? { display: "none" } : { display: "block" }}
          autoFocus
          onClick={() => handleShowCardInput()}
        >
          Add new card
        </button>
        {visible && (
          <div
            style={visible ? { display: "block" } : { display: "none" }}
            className="input-container"
          >
            <input
              type="text"
              className="input"
              placeholder="Введите название..."
              onKeyDown={(e) => {
                e.key === "Enter" ? handleAddButton(e) : false;
              }}
              onChange={(e) => setCardHeader(e.target.value)}
            />

            <div className="buttons">
              <button
                className="button button_border button_font button_m-p"
                onClick={(e) => {
                  handleAddButton(e);
                }}
              >
                Confirm
              </button>
              <button
                className="button button_font button_border button_m-p"
                onClick={() => setVisible(!visible)}
              >
                close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Block;
