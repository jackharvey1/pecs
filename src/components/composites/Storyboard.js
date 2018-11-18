import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StoryboardImage from './StoryboardImage';
import Adder from '../atomics/Adder';

const FlexRow = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: row;

    overflow-x: auto;
    overflow-y: hidden;

    width: 100vw;
    height: calc(100vh - 40px);

    --spacing: 10px;

    @media (min-width: 1024px) {
        --spacing: 15px;
    }

    & > * {
        margin: var(--spacing);
        flex-shrink: 0;
    }

    &:before {
        content: '';
        margin-left: 20px;
    }

    &:after {
        content: '';
        margin-right: 20px;
    }
`;

const Storyboard = ({ data, showGallery, deleteCard, addToCaption }) => (
    <FlexRow>
        {data.map(({ src, alt, caption }, i) => (
            <Fragment key={i}>
                <Adder showGallery={showGallery} index={i} />
                <StoryboardImage
                    src={src}
                    alt={alt}
                    caption={caption}
                    deleteCard={deleteCard}
                    index={i}
                    addToCaption={addToCaption}
                />
            </Fragment>
        ))}
        <Adder showGallery={showGallery} index={data.length} />
    </FlexRow>
);

Storyboard.propTypes = {
    addToCaption: PropTypes.func.isRequired,
    showGallery: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
            caption: PropTypes.string,
        })
    ),
};

export default Storyboard;

