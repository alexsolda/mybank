import styled from 'styled-components';

export const ContainerGreetings = styled.div`
    color: #001D40;

    display: flex;
    flex-direction: column;

    padding: 20px 0;

    flex: 2;
`

export const ContentGreetings = styled.h3`
    font-size: 30px;
    font-weight: 500;
`

export const DateTime = styled.span`
    font-size: 18px;
    font-weight: 300;
`

export const ContainerData = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
`

export const DataInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 150px;
    padding: 5px 0;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 0px 15px 3px rgba(0, 29, 64, 0.1);

    color: #FFF;

    background-color: ${({bgColor}) => bgColor};

    margin-left: 10px;
`

export const DataTitle = styled.h4`
    font-weight: 300;
`

export const DataValue = styled.span`
    font-weight: 500;
`