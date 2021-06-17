import styled from 'styled-components';

export const Title = styled.h3`
    color: #001D40;
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;
`

export const ContainerContent = styled.div`
    background-color: #FFF;

    width: 100%;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 0px 15px 3px rgba(0, 29, 64, 0.1);

    display: flex;

    padding: 10px 20px;
    margin-bottom: 20px;

    @media(max-width: 1035px){
        flex-direction: column;
    }
`