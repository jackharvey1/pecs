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

const WrapperThingy = styled.div`
    position: relative;
`;

const PictureBoard = ({ id, dragging, onDrop, onDragOver, data, onDragStart }) => (
    <FlexRow
        id={id}
        onDrop={onDrop}
        onDragOver={onDragOver}
    >
        <DragHelper big id={`${id}-0`} shouldDisplay />
        {data && data.map(({ src, alt, text }, i) => (
            <WrapperThingy id={id} key={i}>
                <DragHelper left id={`${id}-${i}`} shouldDisplay={dragging} />
                <DragHelper id={`${id}-${i + 1}`} shouldDisplay={dragging} />
                <CaptionedImage
                    id={`${id}-${i}`}
                    src={src}
                    alt={alt}
                    text={text}
                    onDragStart={onDragStart}
                />
            </WrapperThingy>
        ))}
        <DragHelper big id={`${id}-${data.length}`} shouldDisplay />
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
            text: PropTypes.string,
        })
    ),
    onDragStart: PropTypes.func.isRequired,
};

export default PictureBoard;

