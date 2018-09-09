import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CaptionedImage from './CaptionedImage';

const FlexRow = styled.div`
    display: inline-flex;
    flex-direction: row;
`;

const PictureBoard = ({ data }) => (
    <FlexRow>
        {data && data.map(({ src, alt, text }, i) => (
            <CaptionedImage
                key={i}
                src={src}
                alt={alt}
                text={text}
            />
        ))}
    </FlexRow>
);

PictureBoard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default PictureBoard;

