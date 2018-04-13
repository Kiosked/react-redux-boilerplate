import { combineReducers } from "redux";
import routing from "./routing.js";
import sample from "./sample.js";

const rootReducer = combineReducers({
    routing,
    sample
});

export default rootReducer;
