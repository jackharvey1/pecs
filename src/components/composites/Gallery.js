import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridImage from '../atomics/GridImage';

const GalleryContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;

    top: 100vh

    background: white;

    transition: top 0.4s ease-in-out 0s;

    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    align-content: flex-start;
`;

const MenuBar = styled.div`
    width: 100%;
    height: 40px;

    background: linear-gradient(#ff8197, #ff9bac);

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Cancel = styled.button`
    display: block;

    background: none;
    border: none;

    color: white;

    font-variant: all-small-caps;
    font-size: 15px;
    font-weight: 100;
    font-family: sans-serif;
    letter-spacing: 1.5px;

    padding-left: 17px;

    &:focus {
        outline: none;
    }
`;

const Gallery = ({ data, hideGallery, addToStoryboard, galleryTopValue }) => (
    <GalleryContainer style={{ top: galleryTopValue }}>
        <MenuBar>
            <Cancel onClick={hideGallery}>Cancel</Cancel>
        </MenuBar>
        {data.map((image, i) => (
            <GridImage
                key={i}
                src={image.src}
                alt={image.alt}
                addToStoryboard={addToStoryboard}
            />
        ))}
    </GalleryContainer>
);

Gallery.propTypes = {
    data: PropTypes.array.isRequired,
    galleryTopValue: PropTypes.string.isRequired,
    hideGallery: PropTypes.func.isRequired,
    addToStoryboard: PropTypes.func.isRequired,
};

export default Gallery;
