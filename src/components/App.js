import React, { Component } from 'react';
import styled from 'styled-components';
import images from '../assets';
import PictureBoard from './composites/PictureBoard';

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
            dragging: false,
            pictureBank,
            storyboard: [],
        };
    }

    render () {
        return (
            <SuperContainer>
                <PictureBoard
                    centered
                    id="storyboard"
                    data={this.state.storyboard}
                    onDragStart={this.onDragStart.bind(this)}
                    onDrop={this.onDrop.bind(this)}
                    onDragOver={this.onDragOver.bind(this)}
                    dragging={this.state.dragging}
                />
                <PictureBoard
                    id="pictureBank"
                    data={this.state.pictureBank}
                    onDragStart={this.onDragStart.bind(this)}
                    onDrop={this.onDrop.bind(this)}
                    onDragOver={this.onDragOver.bind(this)}
                />
            </SuperContainer>
        );
    }

    onDragStart (event, src) {
        const [eventSource, sourceIndex] = event.target.id.split('-');

        const { alt } = this.state.pictureBank.find((image) => image.src === src);
        const sourceInfo = { eventSource, sourceIndex, src, alt };
        event.dataTransfer.setData('sourceInfo', JSON.stringify(sourceInfo));
    }

    onDrop (event) {
        event.preventDefault();

        const sourceInfo = event.dataTransfer.getData('sourceInfo');
        const { eventSource, sourceIndex, src, alt } = JSON.parse(sourceInfo);

        const [eventDestination, destinationIndex] = event.target.id.split('-');

        const storyboardClone = this.state.storyboard.slice();

        if (eventDestination === 'pictureBank' || eventDestination === 'storyboard') {
            if (eventSource === 'storyboard') {
                storyboardClone.splice(sourceIndex, 1);
            }

            if (eventDestination === 'storyboard') {
                storyboardClone.splice(destinationIndex, 0, { src, alt });
            }
        }

        this.setState({
            storyboard: storyboardClone,
            dragging: false,
        });
    }

    onDragOver (event) {
        event.preventDefault();

        if (!this.state.dragging) {
            this.setState({
                dragging: true,
            });
        }
    }
}
