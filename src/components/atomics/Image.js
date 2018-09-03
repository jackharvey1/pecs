import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const ShadowedImage = styled.img`
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .25);
`;

const Caption = props =>
    (<ShadowedImage src={props.src} />);

Caption.propTypes = {
    src: PropTypes.string
};

export default Caption;
