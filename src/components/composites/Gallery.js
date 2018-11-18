import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GridImage from '../atomics/GridImage';
import MenuBar from '../atomics/MenuBar';
import Button from '../atomics/Button';

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

    @media print {
        display: none;
    }
`;

const Gallery = ({ data, hideGallery, addToStoryboard, galleryTopValue }) => (
    <GalleryContainer style={{ top: galleryTopValue }}>
        <MenuBar>
            <Button onClick={hideGallery}>Cancel</Button>
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
