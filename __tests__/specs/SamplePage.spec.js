import React from "react";
import renderer from "react-test-renderer";
import SamplePage from "../../source/components/SamplePage.js";

const NOOP = () => {};

test("renders base component correctly", () => {
    const component = renderer.create(
        <SamplePage
            inputValue=""
            onSetValue={NOOP}
        />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
