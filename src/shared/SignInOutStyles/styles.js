import styled from 'styled-components';

export const ContainerBackground = styled.div`
    min-height: 100vh;
    background: linear-gradient(180deg, #009DF5 0%, rgba(255, 255, 255, 0) 100%), #00A3FE;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;

    @media(max-width: 460px){
        padding: 0 20px;
    }
    
`

export const Content = styled.div`
    background-color: #FFF;
    max-width: 460px;
    width: 100%;

    padding: 20px 10px;

    border-radius: 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.img`
    width: 150px;
    height: auto;
`

export const Title = styled.h2`
    color: #001D40;
    font-size: 25px;
    margin-bottom: 20px;
`