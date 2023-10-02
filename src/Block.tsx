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

        <input
          type="text"
          className="input"
          onChange={(e) => setCardHeader(e.target.value)}
        />
        <div
          className="button button_border button_font button_m-p"
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
    </>
  );
};

export default Block;
