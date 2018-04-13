import {
    SAMPLE_CHANGE_VALUE
} from "../actions/types.js";

const INITIAL = {
    sampleValue: ""
};

export default function sampleReducer(state = INITIAL, action = {}) {
    switch (action.type) {
        case SAMPLE_CHANGE_VALUE:
            return {
                ...state,
                sampleValue: action.payload
            };

        default:
            return state;
    }
}
