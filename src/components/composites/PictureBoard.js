import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CaptionedImage from './CaptionedImage';
import DragHelper from '../atomics/DragHelper';

const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    overflow-x: scroll;
    overflow-y: hidden;

    border-width: 1px 0;
    border-color: lightgray;
    border-style: solid;

    min-height: 256px;
    width: 100vw;

    position: relative;
`;

const Wrapper = styled.div`
    position: relative;
`;

const PictureBoard = ({ id, dragging, onDrop, onDragOver, data, onDragStart, addToCaption }) => (
    <FlexRow
        id={id}
        onDrop={onDrop}
        onDragOver={onDragOver}
    >
        <DragHelper
            id={`${id}-0`}
            big
            shouldDisplayDragHelper
        />
        {data && data.map(({ src, alt, caption }, i) => (
            <Wrapper id={id} key={i}>
                <DragHelper
                    id={`${id}-${i}`}
                    shouldDisplayDragHelper={dragging}
                    left
                />
                <DragHelper
                    id={`${id}-${i + 1}`}
                    shouldDisplayDragHelper={dragging}
                />
                <CaptionedImage
                    id={`${id}-${i}`}
                    src={src}
                    alt={alt}
                    caption={caption}
                    onDragStart={onDragStart}
                    index={i}
                    addToCaption={addToCaption}
                />
            </Wrapper>
        ))}
        <DragHelper
            id={`${id}-${data.length}`}
            big
            shouldDisplayDragHelper
        />
    </FlexRow>
);

PictureBoard.propTypes = {
    id: PropTypes.string.isRequired,
    dragging: PropTypes.bool,
    onDrop: PropTypes.func.isRequired,
    onDragOver: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
            caption: PropTypes.string,
        })
    ),
    onDragStart: PropTypes.func.isRequired,
    addToCaption: PropTypes.func,
};

export default PictureBoard;

