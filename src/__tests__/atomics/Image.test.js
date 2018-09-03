import React from 'react';
import { shallow } from 'enzyme';
import Image from '../../components/atomics/Image';

describe('Image component', () => {
    it('renders as intended', () => {
        const wrapper = shallow(<Image src="http://image.com/image.png" />);
        expect(wrapper).toMatchSnapshot();
    });
});
