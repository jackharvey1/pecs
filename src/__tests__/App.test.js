import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App component', () => {
    it('renders renders as intended', () => {
        const wrapper = renderer.create(<App />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('addToCaption adds the caption to the state when triggered', () => {
        const wrapper = shallow(<App />);
        const mockEvent = {
            target: {
                value: 'caption',
            },
        };
        wrapper.instance().addToCaption(0, mockEvent);
        expect(wrapper.state().storyboard[0]).toHaveProperty('caption', 'caption');
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
