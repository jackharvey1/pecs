import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
    border: none;
    color: #333333;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    margin-top: 12px;
    text-align: center;

    &:focus {
        outline: none;
    }
`;

const Caption = ({ shouldDisplayCaption, addToCaption, caption, index }) => shouldDisplayCaption
    ? (<Input
        value={caption}
        onChange={(event) => addToCaption(index, event)}
        placeholder="Add caption here"
    />)
    : null;

Caption.propTypes = {
    index: PropTypes.number,
    addToCaption: PropTypes.func,
    shouldDisplayCaption: PropTypes.bool,
    caption: PropTypes.string,
};

export default Caption;

