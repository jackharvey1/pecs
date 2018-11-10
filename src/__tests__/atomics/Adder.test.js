import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Adder from '../../components/atomics/Adder';

describe('Adder component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(
            <Adder
                index={0}
                showGallery={() => null}
            />
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('calls showGallery with the correct inded when clicked', () => {
        const mockShowGallery = jest.fn();
        const wrapper = shallow(
            <Adder
                index={0}
                showGallery={mockShowGallery}
            />
        );

        wrapper.simulate('click');

        expect(mockShowGallery).toHaveBeenCalledWith(0);
    });
});
