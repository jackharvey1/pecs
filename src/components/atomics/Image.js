import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShadowedImage = styled.img`
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);

    margin: auto;

    width: 125px
    height: 125px

    @media (min-width: 1024px) {
        width: 150px;
        height: 150px;
    }
`;

const Image = ({ src, alt }) =>
    (<ShadowedImage
        src={src}
        alt={alt}
    />);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default Image;

