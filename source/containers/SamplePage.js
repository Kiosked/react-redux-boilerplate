import { connect } from "react-redux";
import SamplePage from "../components/SamplePage.js";
import { setSampleValue } from "../actions/sample.js";
import { getSampleValue } from "../selectors/sample.js";
export default connect(
    (state, ownProps) => ({
        inputValue: getSampleValue(state)
    }),
    {
        onSetValue: newValue => dispatch => {
            dispatch(setSampleValue(newValue));
        }
    }
)(SamplePage);
