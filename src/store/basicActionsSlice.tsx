import {
  PayloadAction,
  createSlice,
  current,
  isAction,
} from "@reduxjs/toolkit";

import { Block, Card } from "../types";
import { calcLength } from "framer-motion";

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
  },
});

export const { addBlock, deleteBlock, addCard } = basicActionsSlice.actions;

export default basicActionsSlice.reducer;
