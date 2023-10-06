import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Block, Card, Tag } from "../types";

interface basicAction {
  values: Block[];
}

const initialState: basicAction = {
  values: [],
};

export const basicActionsSlice = createSlice({
  name: "basicActions",
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      const newBlock: Block = {
        ...action.payload,
        cards: [],
      };
      state.values.push(newBlock);
    },
    deleteBlock: (state) => {
      if (state.values.length <= 0) {
        state.values;
      } else {
        state.values.pop();
      }
    },
    addCard: (state, action: PayloadAction<Card>) => {
      const blockIndex = state.values.findIndex(
        (block) => block.id === action.payload.parentBlockId
      );
      if (blockIndex !== -1) {
        const block = state.values[blockIndex];
        if (Array.isArray(block.cards)) {
          if (action.payload.header.length === 0) {
            return;
          } else {
            block.cards.push(action.payload);
          }
        } else {
          throw new Error("Can't match the Block");
        }
      }
    },
    deleteCard: (state, action: PayloadAction<Card>) => {
      const blockIndex = state.values.findIndex(
        (block) => block.id === action.payload.parentBlockId
      );
      const block = state.values[blockIndex];
      block.cards.splice(
        block.cards.findIndex((card) => card.id === action.payload.id),
        1
      );
    },
    addTag: (state, action: PayloadAction<Tag>) => {
      const blockID = state.values.findIndex(
        (block) => block.id === action.payload.blockId
      );
      const cardId = state.values[blockID].cards.findIndex(
        (card) => card.id === action.payload.cardID
      );
      state.values[blockID].cards[cardId].tags.push(action.payload);
    },
  },
});

export const { addBlock, deleteBlock, addCard, deleteCard, addTag } =
  basicActionsSlice.actions;

export default basicActionsSlice.reducer;
