import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../../components/atomics/Image';

describe('Image component', () => {
    it('renders as intended', () => {
        const wrapper = renderer.create(
            <Image
                id="container"
                src="http://image.com/image.png"
                alt="image"
            />
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
