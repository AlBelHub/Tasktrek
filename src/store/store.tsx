import { configureStore } from "@reduxjs/toolkit";
import basicActionsSlice from "./basicActionsSlice";
import inputSlice from "./inputSlice";

export const store = configureStore({
  reducer: {
    basicAction: basicActionsSlice,
    inputSlice: inputSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
