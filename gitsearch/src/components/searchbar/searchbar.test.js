import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from "../../../test/testUtils";
import SearchBar from "./searchbar.component";

const defaultProps = {success: false}


const setUp = (props= {}) => {
    const setUpProps = {...defaultProps, ...props};
    return shallow(<SearchBar {...setUpProps}/>)
}

test("renders without error", () => {
    const wrapper = setUp({success: false});
    const component = findByTestAttr(wrapper, 'searchbarsection');
    expect(component.length).toBe(1);
})


