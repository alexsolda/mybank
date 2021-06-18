import styled from 'styled-components';

export const ColorItem = styled.div`
    display: inline-block;

    background-color: #${({bgColor}) => bgColor};

    width: 30px;
    height: 30px;

    border-radius: 50%;
    border: 2px solid transparent;

    cursor: pointer;

    margin-right: 7px;

    &:hover {
        border: 2px solid #00ACEE;
    }
`