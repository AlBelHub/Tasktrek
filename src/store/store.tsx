import { configureStore } from "@reduxjs/toolkit";
import basicActionsSlice from "./basicActionsSlice";


export const store = configureStore({
    reducer: {
        basicAction: basicActionsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch