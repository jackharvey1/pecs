import React from 'react';
import renderer from 'react-test-renderer';
import PictureBoard from '../../components/composites/PictureBoard';

describe('PictureBoard component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<PictureBoard
            data={[
                {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                    text: 'Caption',
                },
            ]}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
