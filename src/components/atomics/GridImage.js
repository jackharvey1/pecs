import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResponsiveImage = styled.img`
    --width: calc(100vw/3);

    @media (min-width: 768px) {
        --width: calc(100vw/4);
    }

    @media (min-width: 1024px) {
        --width: calc(100vw/6);
    }

    @media (min-width: 1280px) {
        --width: calc(100vw/8);
    }

    height: var(--width);
    width: var(--width);
`;

const GridImage = ({ src, alt, addToStoryboard }) => (
    <ResponsiveImage
        src={src}
        alt={alt}
        onClick={() => addToStoryboard(src, alt)}
    />
);

GridImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    addToStoryboard: PropTypes.func.isRequired,
};

export default GridImage;
