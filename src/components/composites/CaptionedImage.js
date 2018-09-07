import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Caption from '../atomics/Caption';
import Image from '../atomics/Image';

const InlineFlexDiv = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 20px;
`;

const CaptionedImage = ({ id, src, alt, text, onDragStart }) => (
    <InlineFlexDiv>
        <Image
            id={id}
            src={src}
            alt={alt}
            onDragStart={onDragStart}
        />
        <Caption text={text} />
    </InlineFlexDiv>
);

CaptionedImage.propTypes = {
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string,
    onDragStart: PropTypes.func.isRequired,
};

export default CaptionedImage;

