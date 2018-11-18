import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import App from '../components/App';

describe('App component', () => {
    it('renders renders as intended', () => {
        const wrapper = renderer.create(<App />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('adds a caption and truncates it so it does not exceed 3 rows', () => {
        const wrapper = mount(<App />);
        wrapper.setState({
            storyboard: [{
                src: 'https://image.com/image.png',
                alt: 'image',
                caption: '',
            }],
        });

        const mockEvent = {
            target: {
                value: '* **** ***** * *** ***  ** * *',
                getAttribute: (attr) => attr === 'rows' ? 3 : 10,
            },
        };

        const caption = wrapper.find('textarea');
        caption.simulate('change', mockEvent);
        wrapper.update();

        expect(wrapper.state().storyboard[0].caption).toEqual('* **** ***\n* * *** **\n  ** * *');
    });

    it('sets galleryOpenedAt to the passed index', () => {
        const wrapper = shallow(<App />);

        wrapper.instance().showGallery(0);

        expect(wrapper.state()).toHaveProperty('galleryOpenedAt', 0);
    });

    it('inserts the passed image to the location set by galleryOpenedAt', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({
            galleryOpenedAt: 0,
        });

        wrapper.instance().addToStoryboard('https://image.com/image.png', 'image');

        expect(wrapper.state().storyboard[0]).toEqual({
            src: 'https://image.com/image.png',
            alt: 'image',
        });
    });

    it('deletes the card at the specified location', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({
            storyboard: [{
                src: 'https://image.com/image.png',
                alt: 'image',
            }],
        });

        wrapper.instance().deleteCard(0);
        expect(wrapper.state().storyboard).toEqual([]);
    });
});
