import styled from 'styled-components';

export const ButtonStyle = styled.button`
    width: 100%;

    color: ${({solid}) => solid ? '#FFF' : '#00A3FE'};
    background-color: ${({solid}) => solid ? '#00A3FE' : '#FFF'};

    border: 1px solid #00A3FE;
    border-radius: 5px;

    padding: 8px 0;

    font-size: 20px;
    text-transform: uppercase;
    font-weight: 500;

    margin-bottom: 10px;

    cursor: pointer;
`