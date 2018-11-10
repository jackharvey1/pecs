import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GridImage from '../../components/atomics/GridImage';

describe('GridImage component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(
            <GridImage
                src="http://image.com/image.png"
                alt="image"
                addToStoryboard={() => null}
            />
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('calls addToStoryboard with src and alt on click', () => {
        const mockAddToStoryboard = jest.fn();

        const wrapper = shallow(
            <GridImage
                src="http://image.com/image.png"
                alt="image"
                addToStoryboard={mockAddToStoryboard}
            />
        );

        wrapper.simulate('click');

        expect(mockAddToStoryboard).toHaveBeenCalledWith('http://image.com/image.png', 'image');
    });
});
