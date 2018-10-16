import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ShadowedImage = styled.img`
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
`;

const Image = ({ id, src, alt, onDragStart }) =>
    (<ShadowedImage
        id={id}
        src={src}
        alt={alt}
        onDragStart={onDragStart}
        draggable
    />);

Image.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onDragStart: PropTypes.func.isRequired,
};

export default Image;

