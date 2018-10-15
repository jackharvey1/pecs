import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../components/App';

const stateWithNoStoryboard = {
    dragging: false,
    pictureBank: [{
        alt: 'image1',
        src: 'image1.jpg',
    }, {
        alt: 'image2',
        src: 'image2.jpg',
    }, {
        alt: 'image3',
        src: 'image3.jpg',
    }],
    storyboard: [],
};

const stateWithOneImageInStoryboard = {
    dragging: false,
    pictureBank: [{
        alt: 'image1',
        src: 'image1.jpg',
    }, {
        alt: 'image2',
        src: 'image2.jpg',
    }, {
        alt: 'image3',
        src: 'image3.jpg',
    }],
    storyboard: [{
        alt: 'image1',
        src: 'image1.jpg',
        caption: '',
    }],
};

const stateWithManyImagesInStoryboard = {
    dragging: false,
    pictureBank: [{
        alt: 'image1',
        src: 'image1.jpg',
    }, {
        alt: 'image2',
        src: 'image2.jpg',
    }, {
        alt: 'image3',
        src: 'image3.jpg',
    }],
    storyboard: [{
        alt: 'image1',
        src: 'image1.jpg',
    }, {
        alt: 'image2',
        src: 'image2.jpg',
    }, {
        alt: 'image3',
        src: 'image3.jpg',
    }],
};

describe('App component', () => {
    it('renders renders as intended', () => {
        const wrapper = renderer.create(<App />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('onDragStart picks out the required variables and sets them on the dataTransfer property', () => {
        const wrapper = shallow(<App />);
        const mockEvent = {
            target: {
                id: 'pictureBank-3',
            },
            dataTransfer: {
                setData: jest.fn(),
            },
        };
        const src = 'image1.jpg';
        wrapper.instance().onDragStart(mockEvent, src);

        const infoString = '{"eventSource":"pictureBank","sourceIndex":"3","src":"image1.jpg","alt":"image1"}';

        expect(mockEvent.dataTransfer.setData).toHaveBeenCalledWith('sourceInfo', infoString);
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

    describe('onDrop', () => {
        it('does not modify the board if the destination is not pictureBank or storyboard', () => {
            const wrapper = shallow(<App />);
            const mockEvent = {
                preventDefault: () => null,
                dataTransfer: {
                    getData: () => JSON.stringify({
                        src: 'image1.jpg',
                        alt: 'image1',
                        eventSource: 'storyboard',
                        sourceIndex: 0,
                    }),
                },
                target: {
                    id: 'somewhereElse-0',
                },
            };
            wrapper.instance().onDrop(mockEvent);
            expect(wrapper.state()).toEqual(stateWithNoStoryboard);
        });

        it('adds an item to the storyboard when storyboard is the destination', () => {
            const wrapper = shallow(<App />);
            const mockEvent = {
                preventDefault: () => null,
                dataTransfer: {
                    getData: () => JSON.stringify({
                        src: 'image1.jpg',
                        alt: 'image1',
                        eventSource: 'pictureBank',
                        sourceIndex: 1,
                    }),
                },
                target: {
                    id: 'storyboard-0',
                },
            };
            wrapper.instance().onDrop(mockEvent);
            expect(wrapper.state()).toEqual(stateWithOneImageInStoryboard);
        });

        it('adds a blank caption when adding to the storyboard', () => {
            const wrapper = shallow(<App />);
            const mockEvent = {
                preventDefault: () => null,
                dataTransfer: {
                    getData: () => JSON.stringify({
                        src: 'image1.jpg',
                        alt: 'image1',
                        eventSource: 'pictureBank',
                        sourceIndex: 1,
                    }),
                },
                target: {
                    id: 'storyboard-0',
                },
            };
            wrapper.instance().onDrop(mockEvent);
            expect(wrapper.state().storyboard[0]).toHaveProperty('caption', '');
        });

        it('removes an item from the storyboard when storyboard is the the source', () => {
            const wrapper = shallow(<App />);
            const mockEvent = {
                preventDefault: () => null,
                dataTransfer: {
                    getData: () => JSON.stringify({
                        src: 'image1.jpg',
                        alt: 'image1',
                        eventSource: 'storyboard',
                        sourceIndex: 0,
                    }),
                    setData: () => null,
                },
                target: {
                    id: 'pictureBank-0',
                },
            };

            wrapper.setState(stateWithOneImageInStoryboard);
            wrapper.instance().onDrop(mockEvent);
            expect(wrapper.state()).toEqual(stateWithNoStoryboard);
        });

        it('swaps items to the left when storyboard is both the source and destination', () => {
            const wrapper = shallow(<App />);
            const mockEvent = {
                preventDefault: () => null,
                dataTransfer: {
                    getData: () => JSON.stringify({
                        src: 'image2.jpg',
                        alt: 'image2',
                        eventSource: 'storyboard',
                        sourceIndex: 1,
                    }),
                    setData: () => null,
                },
                target: {
                    id: 'storyboard-0',
                },
            };

            wrapper.setState(stateWithManyImagesInStoryboard);
            wrapper.instance().onDrop(mockEvent);
            expect(wrapper.state()).toEqual({
                ...stateWithManyImagesInStoryboard,
                storyboard: [{
                    alt: 'image2',
                    src: 'image2.jpg',
                    caption: '',
                }, {
                    alt: 'image1',
                    src: 'image1.jpg',
                }, {
                    alt: 'image3',
                    src: 'image3.jpg',
                }],
            });
        });

        it('swaps items to the right when storyboard is both the source and destination', () => {
            const wrapper = shallow(<App />);
            const mockEvent = {
                preventDefault: () => null,
                dataTransfer: {
                    getData: () => JSON.stringify({
                        src: 'image1.jpg',
                        alt: 'image1',
                        eventSource: 'storyboard',
                        sourceIndex: 0,
                    }),
                    setData: () => null,
                },
                target: {
                    id: 'storyboard-1',
                },
            };

            wrapper.setState(stateWithManyImagesInStoryboard);
            wrapper.instance().onDrop(mockEvent);
            expect(wrapper.state()).toEqual({
                ...stateWithManyImagesInStoryboard,
                storyboard: [{
                    alt: 'image2',
                    src: 'image2.jpg',
                }, {
                    alt: 'image1',
                    src: 'image1.jpg',
                    caption: '',
                }, {
                    alt: 'image3',
                    src: 'image3.jpg',
                }],
            });
        });
    });

    describe('onDragOver', () => {
        it('sets dragging to false if it is true', () => {
            const wrapper = shallow(<App />);
            const mockEvent = { preventDefault: jest.fn() };
            wrapper.instance().onDragOver(mockEvent);
            expect(mockEvent.preventDefault).toHaveBeenCalled();
        });

        it('sets dragging to true if it is false', () => {
            const wrapper = shallow(<App />);
            const mockEvent = { preventDefault: jest.fn() };

            wrapper.setState({ dragging: false });
            wrapper.instance().onDragOver(mockEvent);

            expect(wrapper.state().dragging).toBe(true);
        });

        it('does not modify dragging if dragging is true', () => {
            const wrapper = shallow(<App />);
            const mockEvent = { preventDefault: jest.fn() };

            wrapper.setState({ dragging: true });
            wrapper.instance().onDragOver(mockEvent);

            expect(wrapper.state().dragging).toBe(true);
        });
    });
});
