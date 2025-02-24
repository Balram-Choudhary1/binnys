import { combineReducers } from "redux";
import zooReducer from "./reducer/todoSlice";

const rootReducer = combineReducers({
  zoo: zooReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;