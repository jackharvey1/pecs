import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;

    margin-top: 12px;

    border: none;
    color: #333333;

    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    text-align: center;

    &:focus {
        outline: none;
    }
`;

const Caption = ({ addToCaption, caption, index }) => (
    <Input
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

