import React from 'react';
import renderer from 'react-test-renderer';
import DragHelper from '../../components/atomics/DragHelper';

describe('DragHelper component', () => {
    it('renders a regular right translated helper when no prop is passed', () => {
        const wrapper = renderer.create(<DragHelper
            id="helper"
            shouldDisplay={true}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a left translated helper when no prop is passed', () => {
        const wrapper = renderer.create(<DragHelper
            left
            id="helper"
            shouldDisplay={true}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('renders a large helper when prop big is passed', () => {
        const wrapper = renderer.create(<DragHelper
            big
            shouldDisplay={true}
            id="big-helper"
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('returns null when shouldDisplay is not true', () => {
        const wrapper = renderer.create(<DragHelper
            big
            shouldDisplay={false}
            id="big-helper"
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
