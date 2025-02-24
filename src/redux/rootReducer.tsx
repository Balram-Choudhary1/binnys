import { combineReducers } from "redux";
import todoReducer from "./reducer/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;