import { userReducer } from "./userReducer";
import { courseReducer } from "./courseReducer";
import { CommentReducer } from "./commentReducer";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  courses: courseReducer,
  comments: CommentReducer
});
