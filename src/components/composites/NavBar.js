import React from 'react';
import styled from 'styled-components';
import MenuBar from '../atomics/MenuBar';
import Button from '../atomics/Button';
import { MdPrint } from 'react-icons/md';

const RightAlignedMenuBar = styled(MenuBar)`
    justify-content: flex-end;
`;

const LinkText = styled.p`
    margin-left: 3px;
    line-height: 14px;
`;

const NavBar = () => (
    <RightAlignedMenuBar>
        <Button onClick={window.print}>
            <MdPrint />
            <LinkText>
                Print
            </LinkText>
        </Button>
    </RightAlignedMenuBar>
);

export default NavBar;

