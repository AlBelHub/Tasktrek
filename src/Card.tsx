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
        <p className="card__header">{header}</p>
      </div>
    </>
  );
};
