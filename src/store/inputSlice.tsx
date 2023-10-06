import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Text {
  text: string;
}

const initialState: Text = {
  text: "",
};

export const inputSlice = createSlice({
  name: "inputSlice",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<Text>): void => {
      if (state.text.length <= 0) {
        return;
      } else {
        state.text = action.payload.text;
      }
    },
    clearText: (state) => {
      state.text = "";
    },
  },
});

export const { setText, clearText } = inputSlice.actions;
export default inputSlice.reducer;
