import React, { Component } from 'react';
import styled from 'styled-components';
import * as images from '../assets';
import PictureBoard from './composites/PictureBoard';

const SuperContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class App extends Component {
    constructor () {
        const pictureBank = Object.keys(images).map(imageName => ({
            src: images[imageName],
            alt: imageName,
        }));

        super();
        this.state = {
            pictureBank,
        };
    }

    render() {
        return (
            <SuperContainer>
                <PictureBoard data={this.state.pictureBank} />
            </SuperContainer>
        );
    }
}
