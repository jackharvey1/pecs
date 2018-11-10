import React, { Component } from 'react';
import styled from 'styled-components';
import images from '../assets';
import Storyboard from './composites/Storyboard';
import Gallery from './composites/Gallery';

const SuperContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default class App extends Component {
    constructor () {
        super();

        const pictureBank = Object.keys(images)
            .map(imageName => ({
                src: images[imageName],
                alt: imageName,
            }));

        this.state = {
            galleryTopValue: '100vh',
            dragging: false,
            pictureBank,
            storyboard: [],
        };
    }

    render () {
        return (
            <SuperContainer>
                <Storyboard
                    centered
                    data={this.state.storyboard}
                    addToCaption={this.addToCaption.bind(this)}
                    deleteCard={this.deleteCard.bind(this)}
                    showGallery={this.showGallery.bind(this)}
                />
                <Gallery
                    galleryTopValue={this.state.galleryTopValue}
                    data={this.state.pictureBank}
                    hideGallery={this.hideGallery.bind(this)}
                    galleryOpenedAt={this.state.galleryOpenedAt}
                    addToStoryboard={this.addToStoryboard.bind(this)}
                />
            </SuperContainer>
        );
    }

    addToCaption (index, event) {
        const storyboardClone = this.state.storyboard.slice();
        storyboardClone.splice(index, 1, {
            ...storyboardClone[index],
            caption: event.target.value,
        });

        this.setState({
            storyboard: storyboardClone,
        });
    }

    showGallery (index) {
        this.setState({
            galleryOpenedAt: index,
            galleryTopValue: '0',
        });
    }

    hideGallery () {
        this.setState({
            galleryTopValue: '100vh',
        });
    }

    addToStoryboard (src, alt) {
        const storyboardClone = this.state.storyboard.slice();
        storyboardClone.splice(this.state.galleryOpenedAt, 0, { src, alt });

        this.setState({
            storyboard: storyboardClone,
        });

        this.hideGallery();
    }

    deleteCard (index) {
        const storyboardClone = this.state.storyboard.slice();
        storyboardClone.splice(index, 1);

        this.setState({
            storyboard: storyboardClone,
        });
    }
}
