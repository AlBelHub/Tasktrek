import React from "react";

interface Props {
  id: string;
  header: string;
  BlockID: string;
}

export const Card = ({ id, header, BlockID }: Props) => {
  return (
    <>
      <p className="">{header}</p>
    </>
  );
};
