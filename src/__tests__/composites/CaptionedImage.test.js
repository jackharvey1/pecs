import React from 'react';
import { shallow } from 'enzyme';
import CaptionedImage from '../../components/composites/CaptionedImage';

describe('CaptionedImage component', () => {
    it('renders as intended', () => {
        const wrapper = shallow(<CaptionedImage
            src="http://image.com/image.png"
            text="Caption"
        />);
        expect(wrapper).toMatchSnapshot();
    });
});
