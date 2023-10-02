import React from "react";
import { useState } from "react";
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

  const CardStore = useSelector(
    (state: RootState): any => state.basicAction.values
  );

  const dispatch = useDispatch();

  return (
    <>
      <div className="card-container">
        <div className="TEMP-container">
          <div className="header-text">{header}</div>
          <div className="content-container">
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

            <input
              type="text"
              className="card-input"
              onChange={(e) => setCardHeader(e.target.value)}
            />
            <div
              className="button"
              onClick={() => {
                dispatch(
                  addCard({
                    id: nanoid(4),
                    header: cardHeader,
                    parentBlockId: parentBlockId,
                  })
                );
              }}
            >
              add card
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Block;
