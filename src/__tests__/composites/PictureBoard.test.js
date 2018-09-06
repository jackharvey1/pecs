import React from 'react';
import { shallow } from 'enzyme';
import PictureBoard from '../../components/composites/PictureBoard';

describe('PictureBoard component', () => {
    it('renders as intended', () => {
        const wrapper = shallow(<PictureBoard
            data={[{
                src: 'http://image.com/image.png',
                text: 'Caption'
            }]}
        />);
        expect(wrapper).toMatchSnapshot();
    });
});
