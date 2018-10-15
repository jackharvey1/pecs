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

const CaptionedImage = ({ id, src, alt, caption, onDragStart, index, addToCaption }) => (
    <InlineFlexDiv>
        <Image
            id={id}
            src={src}
            alt={alt}
            onDragStart={onDragStart}
        />
        <Caption
            index={index}
            caption={caption}
            addToCaption={addToCaption}
            shouldDisplayCaption={id.includes('storyboard')}
        />
    </InlineFlexDiv>
);

CaptionedImage.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string,
    onDragStart: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    addToCaption: PropTypes.func,
};

export default CaptionedImage;

