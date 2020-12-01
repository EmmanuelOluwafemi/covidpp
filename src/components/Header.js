import React from 'react';
import styled from 'styled-components';

const Header = () => {

    const HeaderStyle = styled.div`
        font-size: 2rem;
        text-transform: uppercase;
        width: 100%;
        height: 80px;
        background: green;
        margin-bottom: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;

        span {
            color: red;
        }
    `;

    return (
        <HeaderStyle>
            Naija <span>Covid</span> 
        </HeaderStyle>
    )
}

export default Header;