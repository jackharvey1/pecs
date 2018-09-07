import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Image from '../../components/atomics/Image';

describe('Image component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(
            <Image
                id="container"
                src="http://image.com/image.png"
                alt="image"
                onDragStart={() => null}
                draggable
            />
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('invokes on drag start with the proper parameters', () => {
        const mockOnDragStart = jest.fn();
        const event = { name: 'ondragstart' };
        const src = 'http://image.com/image.png';
        const wrapper = shallow(
            <Image
                id="container"
                src={src}
                alt="image"
                onDragStart={mockOnDragStart}
            />
        );
        wrapper.dive().simulate('dragstart', event);
        expect(mockOnDragStart).toHaveBeenCalledWith(event, src);
    });
});
