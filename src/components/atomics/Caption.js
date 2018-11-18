import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextArea = styled.textarea`
    width: 125px;

    @media (min-width: 1024px) {
        width: 150px;
    }

    margin-top: 12px;

    border: none;
    color: #333333;

    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;

    resize: none;

    &:focus {
        outline: none;
    }

    @media print {
        &::placeholder {
            color: transparent;
        }
    }
`;

const Caption = ({ addToCaption, caption, index }) => (
    <TextArea
        id="caption"
        rows="3"
        cols="10"
        value={caption}
        onChange={(event) => addToCaption(index, event)}
        placeholder="Add caption here"
    />);

Caption.propTypes = {
    index: PropTypes.number.isRequired,
    caption: PropTypes.string,
    addToCaption: PropTypes.func.isRequired,
};

export default Caption;

