import { createAction } from "redux-actions";
import { SAMPLE_CHANGE_VALUE } from "./types.js";

export const setSampleValue = createAction(SAMPLE_CHANGE_VALUE);
