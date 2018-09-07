import React from 'react';
import renderer from 'react-test-renderer';
import PictureBoard from '../../components/composites/PictureBoard';

describe('PictureBoard component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<PictureBoard
            id="storyboard"
            dragging={false}
            container="storyboard"
            onDrop={() => null}
            onDragOver={() => null}
            data={[
                {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                    text: 'Caption',
                },
            ]}
            onDragStart={() => null}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
