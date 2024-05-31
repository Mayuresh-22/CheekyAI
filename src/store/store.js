import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../features/message/messageSlice";

export const store = configureStore({
    reducer: messageReducer
})