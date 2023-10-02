import React from "react";
import { useState } from "react";
import { Card } from "./Card";

interface Props {
  header: string;
  id: string;
}

const Block = ({ header, id }: Props) => {
  const [card, setCard] = useState([1]);

  return (
    <>
      <div className="card-container">
        <div className="TEMP-container">
          <div className="header-text">{header}</div>
          <div className="content-container">
            {card.map((item) => {
              return <Card key={id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Block;
