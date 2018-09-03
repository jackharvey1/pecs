import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Caption from '../atomics/Caption';
import Image from '../atomics/Image';

const InlineFlexDiv = styled.div`
    display: inline-flex;
    flex-direction: column;
`;

const CaptionedImage = ({ text, src }) => (
    <InlineFlexDiv>
        <Image src={src} />
        <Caption text={text} />
    </InlineFlexDiv>
);

CaptionedImage.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string
};

export default CaptionedImage;

