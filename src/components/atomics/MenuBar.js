import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 40px;

    color: white;
    background: linear-gradient(#ff8197, #ff9bac);

    display: flex;
    align-items: center;

    @media print {
        display: none;
    }
`;
