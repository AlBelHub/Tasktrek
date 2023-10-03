import React from "react";

interface Props {
  id: string;
  header: string;
  BlockID: string;
}

export const Card = ({ id, header, BlockID }: Props) => {
  return (
    <>
      <div className="card card_m-p card_border">
        <div className="card__tag-container">
          <div className="card__tag">Важно!</div>
        </div>
        <p className="card__header">{header}</p>
        <div className="card__date">02.08</div>
      </div>
    </>
  );
};
