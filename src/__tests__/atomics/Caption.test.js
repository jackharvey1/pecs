import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Caption from '../../components/atomics/Caption';

describe('Caption component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<Caption
            index={0}
            caption="Some text"
            addToCaption={() => null}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('sets the text as the passed prop', () => {
        const wrapper = shallow(<Caption
            index={0}
            caption="Expected text"
            addToCaption={() => null}
        />);
        expect(wrapper.props().value).toEqual('Expected text');
    });

    it('invokes on change with the proper parameters', () => {
        const mockOnChange = jest.fn();
        const event = { target: { value: 'caption' } };
        const wrapper = shallow(<Caption
            index={1}
            caption="captio"
            addToCaption={mockOnChange}
        />);
        wrapper.simulate('change', event);
        expect(mockOnChange).toHaveBeenCalledWith(1, event);
    });
});
