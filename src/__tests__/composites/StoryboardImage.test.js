import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import StoryboardImage from '../../components/composites/StoryboardImage';

describe('StoryboardImage component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(<StoryboardImage
            src="http://image.com/image.png"
            alt="image"
            caption="Caption"
            index={0}
            deleteCard={() => null}
            addToCaption={() => null}
        />).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it('calls delete when delete button is pressed', () => {
        const mockDeleteCard = jest.fn();
        const wrapper = mount(<StoryboardImage
            src="http://image.com/image.png"
            alt="image"
            caption="Caption"
            index={0}
            deleteCard={mockDeleteCard}
            addToCaption={() => null}
        />);

        const cancelButton = wrapper.find('MdCancel');
        cancelButton.simulate('click');

        expect(mockDeleteCard).toHaveBeenCalled();
    });
});
