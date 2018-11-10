import React from 'react';
import renderer from 'react-test-renderer';
import Storyboard from '../../components/composites/Storyboard';

describe('Storyboard component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<Storyboard
            showGallery={() => null}
            deleteCard={() => null}
            addToCaption={() => null}
            data={[
                {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                    text: 'Caption',
                }, {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                    text: 'Caption',
                }, {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                    text: 'Caption',
                },
            ]}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
