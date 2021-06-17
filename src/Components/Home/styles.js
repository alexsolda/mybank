import styled from 'styled-components';


export const ContainerGreetings = styled.div`
    color: #001D40;

    display: flex;
    flex-direction: column;

    padding: 20px 0;

    flex: 2;

    @media(max-width: 1035px){
        text-align: center;
        margin-bottom: 20px;
    }
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

    background-color: ${({ bgColor }) => bgColor};

    margin-left: 10px;
`

export const DataTitle = styled.h4`
    font-weight: 300;
`

export const DataValue = styled.span`
    font-weight: 500;
`

export const ContainerOptions = styled.div`
    display: flex;      
    flex: 1;

    @media(max-width: 719px){
       flex-direction: column;
       
       align-items: center;
       justify-content: center;
    }
`

export const ContentOption = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #FFF;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 0px 15px 3px rgba(0, 29, 64, 0.1);

    width: 100%;
    height: 400px;

    &:nth-child(-n+2) {
       margin-right: 40px;
    }

    @media(max-width: 930px){
        &:nth-child(-n+2) {
            margin-right: 20px;
    }
    }

    @media(max-width: 719px){
       flex-direction: column;

       width: 80%;

       &:last-child {
        margin-bottom: 80px;
       }

       &:nth-child(-n+2) {
        margin-bottom: 20px;
       margin-right: 0;
    }
    }
`

export const OptionTitle = styled.div`
    background-color: ${({bgColor}) => bgColor};

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;

    padding-left: 10px;

    color: #FFF;

    display: flex;
    align-items: flex-end;

    height: 70px;

    font-size: 25px;

`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    padding: 20px 10px;

    label {
        color: #001D40;
    }
`

export const InputOption = styled.input`
    border-radius: 10px;
    border: none;

    outline: none;

    background-color: ${({bgColor}) => bgColor};

    height: 40px;

    padding: 0 10px;

    font-size: 15px;
`