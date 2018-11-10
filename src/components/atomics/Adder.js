import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const DottedSquare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    width: 50px;

    font-size: 40px;

    border-style: dashed;
    border-color: lightgray;

    &:first-child {
        margin-left: auto;
    }

    &:last-child {
        margin-right: auto;
    }
`;

const Adder = ({ showGallery, index }) => (
    <DottedSquare onClick={() => showGallery(index)}>
        <MdAdd />
    </DottedSquare>
);

Adder.propTypes = {
    showGallery: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Adder;
