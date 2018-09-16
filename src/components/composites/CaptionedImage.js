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

const CaptionedImage = ({ src, alt, text }) => (
    <InlineFlexDiv>
        <Image src={src} alt={alt} />
        <Caption text={text} />
    </InlineFlexDiv>
);

CaptionedImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
};

export default CaptionedImage;

