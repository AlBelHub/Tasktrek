import React from "react";
import { useState } from "react";

interface Props {
  header: string;
}

const Block = ({header}: Props) => {
  const [card, setCard] = useState([0, 1, 2, 3, 4]);



  return (
    <>
    <div className="card-container">
      <div className="TEMP-container">
        <div className="header-text">{header}</div>
        <div className="content-container">
          {card.map((item) => {
            return(<div key={item}>{item}</div>);
            })}
        </div>
      </div>
    </div>

    </>
  );
};

export default Block;
