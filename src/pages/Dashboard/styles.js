import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #ECF8FF;

    display: flex;
`

export const MenuContainer = styled.div`
    background-color: #00ACEE;

    width: 250px;

    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

`

export const MenuItem = styled.div`
    background-color: #001D40;

    border-radius: 50%;

    margin: 10px 0;

    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #FFF;
        font-size: 35px;
    }
`

export const MainContainer = styled.div`
    flex: 1
`