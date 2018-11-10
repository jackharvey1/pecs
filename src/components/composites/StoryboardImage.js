import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Caption from '../atomics/Caption';
import Image from '../atomics/Image';
import { MdCancel } from 'react-icons/md';

const InlineFlexDiv = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
`;

const DeleteButton = styled.div`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    --size: 24px;

    font-size: var(--size);

    top: 0;
    right: 25px;

    @media (min-width: 1024px) {
        right: 12px;
    }

    z-index: 0;

    &:after {
        content: '';

        position: absolute;

        width: 20px;
        height: 20px;
        border-radius: 10px;

        background-color: white;

        z-index: -1;
    }
`;

const StoryboardImage = ({ src, alt, caption, index, deleteCard, addToCaption }) => (
    <InlineFlexDiv>
        <DeleteButton>
            <MdCancel onClick={() => deleteCard(index)} />
        </DeleteButton>
        <Image
            src={src}
            alt={alt}
        />
        <Caption
            caption={caption}
            addToCaption={addToCaption}
            index={index}
        />
    </InlineFlexDiv>
);

StoryboardImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string,
    index: PropTypes.number.isRequired,
    deleteCard: PropTypes.func.isRequired,
    addToCaption: PropTypes.func.isRequired,
};

export default StoryboardImage;

