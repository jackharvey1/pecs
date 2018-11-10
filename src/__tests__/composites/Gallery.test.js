import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Gallery from '../../components/composites/Gallery';

describe('Gallery component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<Gallery
            data={[
                {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                },
            ]}
            galleryTopValue="0"
            hideGallery={() => null}
            addToStoryboard={() => null}
        />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('closes on cancel', () => {
        const mockHideGallery = jest.fn();
        const wrapper = mount(<Gallery
            data={[
                {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                },
            ]}
            galleryTopValue="0"
            hideGallery={mockHideGallery}
            addToStoryboard={() => null}
        />);

        const hideButton = wrapper.find('button');
        hideButton.simulate('click');

        expect(mockHideGallery).toHaveBeenCalled();
    });

    it('calls to add image to storyboard ', () => {
        const mockAddToStoryboard = jest.fn();
        const wrapper = mount(<Gallery
            data={[
                {
                    src: 'http://image.com/image.png',
                    alt: 'image',
                },
            ]}
            galleryTopValue="0"
            hideGallery={() => null}
            addToStoryboard={mockAddToStoryboard}
        />);

        const addToStoryboard = wrapper.find('img').at(0);
        addToStoryboard.simulate('click');

        expect(mockAddToStoryboard).toHaveBeenCalled();
    });
});
