import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "./Layout.js";

const FormHeading = styled.h2`
    font-style: italic;
`;
const FormRow = styled.div`
    display: flex;
    flex-direction: row;
`;

class SamplePage extends Component {
    static propTypes = {
        inputValue: PropTypes.string.isRequired,
        onSetValue: PropTypes.func.isRequired
    };

    handleValueChange(event) {
        this.props.onSetValue(event.target.value);
    }

    render() {
        return (
            <Layout>
                <FormHeading>Test form</FormHeading>
                <FormRow>
                    <label>Type something:</label>
                    <input
                        type="text"
                        value={this.props.inputValue}
                        onChange={::this.handleValueChange}
                    />
                </FormRow>
            </Layout>
        );
    }
}

export default SamplePage;
