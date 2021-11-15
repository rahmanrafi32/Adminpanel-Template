import { configureStore } from "@reduxjs/toolkit";
import createQuestionsReducer from "../features/createQuestionsSlice";

export const store = configureStore({
  reducer: {
    createQuestion: createQuestionsReducer,
  },
});
