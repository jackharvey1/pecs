import React from 'react';
import renderer from 'react-test-renderer';
import CaptionedImage from '../../components/composites/CaptionedImage';
import { shallow } from 'enzyme';

describe('CaptionedImage component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<CaptionedImage
            id="container"
            src="http://image.com/image.png"
            alt="image"
            caption="Caption"
            index={0}
            onDragStart={() => null}
        />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('does not render caption when the id is not part of storyboard', () => {
        const wrapper = shallow(<CaptionedImage
            id="container"
            src="http://image.com/image.png"
            alt="image"
            caption="Caption"
            index={0}
            onDragStart={() => null}
        />);
        expect(wrapper.children().find('Caption').props().shouldDisplayCaption).toBe(false);
    });
});
