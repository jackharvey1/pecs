import React from 'react';
import renderer from 'react-test-renderer';
import CaptionedImage from '../../components/composites/CaptionedImage';

describe('CaptionedImage component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<CaptionedImage
            id="container"
            src="http://image.com/image.png"
            alt="image"
            text="Caption"
            onDragStart={() => null}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
