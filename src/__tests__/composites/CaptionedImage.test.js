import React from 'react';
import renderer from 'react-test-renderer';
import CaptionedImage from '../../components/composites/CaptionedImage';

describe('CaptionedImage component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<CaptionedImage
            src="http://image.com/image.png"
            alt="image"
            text="Caption"
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
