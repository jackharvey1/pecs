import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Helper = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: 1;
    transform: translateX(+100%);
`;

const LeftHelper = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: 1;
`;

const BigHelper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    align-self: stretch;
`;

const DragHelper = ({ shouldDisplay, id, left, big }) => {
    if (shouldDisplay) {
        if (left) {
            return <LeftHelper id={id} />;
        }

        if (big) {
            return <BigHelper id={id} />;
        }

        return <Helper id={id} />;
    }

    return null;
};

DragHelper.propTypes = {
    shouldDisplay: PropTypes.bool,
    left: PropTypes.bool,
    big: PropTypes.bool,
    id: PropTypes.string.isRequired,
};

export default DragHelper;
