import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const P = styled.p`
    color: #333333;
    font-size: 16px;
    font-family: Helvetica, Arial, sans-serif;
    margin-top: 12px;
    text-align: center;
`;

const Caption = props =>
    (<P>{props.text}</P>);

Caption.propTypes = {
    text: PropTypes.string
};

export default Caption;

