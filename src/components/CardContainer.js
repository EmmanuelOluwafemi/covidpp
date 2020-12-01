import React from 'react';
import styled from 'styled-components';

const CardContainer = ({ death, discharged, totalActiveCases, totalConfirmedCases, totalSamplesTested }) => {
    
    const CardContainer = styled.div`
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        margin-bottom: 24px;

        .card{
            width: 100%;
            min-width: 200px;
            padding: 10px 20px;
            background: #fff;
            box-sizing: border-box;
            margin-top: 16px;
            border-radius: 8px;
            box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,.16);
            color: #fff;
            cursor: pointer;

            p {
                font-size: 1.4rem;
                margin: 0;
                text-align: left;
            }

            h2 {
                font-size: 2.5rem;
                margin: 0;
                text-align: right;
            }
        }

        .bg-blue{
            background-color: #0492c2;
        }
        .bg-yellow{
            background-color: #ffc82d;
        }
        .bg-green{
            background-color: #138750;
        }
        .bg-red{
            background-color: red;
        }
        .bg-brown{
            background-color: rgba(106, 98, 36, 0.64);
        }

        @media (min-width: 600px) {
            .card {
                max-width: 220px; 
            }

            h2 {
                font-size: 2rem;
            }
        }

        .card:hover {
            transform: scale(1.05);
        }
    `;

    return (
        <CardContainer>
            <div className="card bg-brown">
                <p>Sample Tested</p>
                <h2>{totalSamplesTested}</h2>
            </div>
            <div className="card bg-blue">
                <p>Confirm Cases</p>
                <h2>{totalConfirmedCases}</h2>
            </div>
            <div className="card bg-yellow">
                <p>Active Cases</p>
                <h2>{totalActiveCases}</h2>
            </div>
            <div className="card bg-green">
                <p>Discharged Cases</p>
                <h2>{discharged}</h2>
            </div>
            <div className="card bg-red">
                <p>Death</p>
                <h2>{death}</h2>
            </div>
        </CardContainer>
    )
}

export default CardContainer;