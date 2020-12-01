import React from 'react';
import styled from 'styled-components';

const Loading = () => {

    const Loader = styled.div`
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0, .6);

        .loader{
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            border: 7px solid #fff;
            border-top: 7px solid green;
            animation: loader 1s linear;
        }

        @keyframes loader {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    `;

    return (
        <Loader>
            <div className="loader"></div>
        </Loader>
    )
}

export default Loading;