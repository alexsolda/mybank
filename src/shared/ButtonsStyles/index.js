import styled, { keyframes } from 'styled-components';

const animateButton = keyframes`
    from {transform: translateX(0px);}
    to {transform: translateX(20px);}
`;

export const ButtonStyle = styled.button`
    width: 100%;

    color: ${({ solid }) => solid ? '#FFF' : '#00A3FE'};
    background-color: ${({ solid }) => solid ? '#00A3FE' : '#FFF'};

    border: 1px solid #00A3FE;
    border-radius: 5px;

    padding: 8px 0;

    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;

    margin-bottom: 10px;

    cursor: pointer;

    display: flex;
    align-self: center;
    justify-content: center;

    svg {
            margin-left: 10px;
    }

    &:hover {
        svg {
            animation: ${animateButton} .6s linear infinite alternate;
        }
    }

    a { 
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: ${({ solid }) => solid ? '#FFF' : '#00A3FE'};
        width: 100%;

        svg {
            margin-left: 10px;
    }
    }
`