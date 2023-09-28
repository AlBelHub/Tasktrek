import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Block } from "../types";

interface basicAction {
    values: Block[]
}

const initialState: basicAction = {
    values: []
}

export const basicActionsSlice = createSlice({
    name: "basicActions",
    initialState,
    reducers: {
        addBlock: (state, action: PayloadAction<Block>) => {
            state.values.push({id: action.payload.id, header: action.payload.header})
        },
        deleteBlock: (state) => {
            if (state.values.length <= 0) {
                state.values;
            }else {
                state.values.pop();
            }
        },
    }
})



export const { addBlock, deleteBlock } = basicActionsSlice.actions

export default basicActionsSlice.reducer