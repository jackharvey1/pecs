import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Caption from '../../components/atomics/Caption';

describe('Caption component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<Caption
            caption="Some text"
            shouldDisplayCaption
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('sets the text as the passed prop', () => {
        const wrapper = shallow(<Caption
            caption="Expected text"
            shouldDisplayCaption
        />);
        expect(wrapper.props().value).toEqual('Expected text');
    });

    it('does not render when shouldDisplayCaption is false', () => {
        const wrapper = renderer.create(<Caption
            text="Some text"
            shouldDisplayCaption={false}
        />).toJSON();
        expect(wrapper).toEqual(null);
    });

    it('invokes on change with the proper parameters', () => {
        const mockOnChange = jest.fn();
        const event = { target: { value: 'caption' } };
        const wrapper = shallow(
            <Caption
                id="container"
                index={1}
                caption="captio"
                alt="image"
                addToCaption={mockOnChange}
                shouldDisplayCaption
            />
        );
        wrapper.simulate('change', event);
        expect(mockOnChange).toHaveBeenCalledWith(1, event);
    });
});
