import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Caption from '../../components/atomics/Caption';

describe('Caption component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<Caption text="Some text" />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('sets the text as the passed prop', () => {
        const wrapper = shallow(<Caption text="Expected text" />);
        expect(wrapper.render().text()).toEqual('Expected text');
    });
});
