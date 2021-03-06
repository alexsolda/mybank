import styled, {keyframes} from 'styled-components';

const animateArrowInfo = keyframes`
    from {
        transform: translateX(20px);
    }
    to {
        transform: translateX(-40px);
    }
`


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
    justify-content: center;

    @media(max-width: 910px){
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

    width: 400px;
    height: 400px;

    &:nth-child(-n+2) {
       margin-right: 40px;
    }

    @media(max-width: 1470px){
       width: 260px;
    }

    @media(max-width: 910px){
        width: 400px;
        &:nth-child(-n+2) {
            margin-right: 0;
            margin-bottom: 20px;
    }
    &:last-child {
        margin-bottom: 100px;
    }
    }

    @media(max-width: 889px){
       
    }
`

export const OptionTitle = styled.div`
    background-color: ${({ bgColor }) => bgColor};

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
        font-size: 18px;
    }
`

export const InputOption = styled.input`
    border-radius: 10px;
    border: none;

    outline: none;

    background-color: ${({ bgColor }) => bgColor};

    height: 40px;

    padding: 0 10px;

    font-size: 15px;

    margin-bottom: 15px;
`

export const ColorsContainer = styled.div`
    position: relative;

    margin: 40px 0;

    overflow-x: hidden;
    overflow-y: hidden;

    label {
        color: #001D40;
        font-size: 18px; 
    }
`

export const ColorPicker = styled.div`
    width: ${({width}) => width}px;
    margin-left: ${({scroll}) => scroll}px;

    transition: all ease .6s;
`

export const ArrowInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: rgba(0,0,0,.4);

    svg {
        animation: ${animateArrowInfo} .8s linear .6s infinite alternate;
    }
`

export const ButtonOptions = styled.button`
    background-color: ${({bgColor}) => bgColor};

    color: #FFF;

    padding: 10px 0;

    font-size: 25px;
    font-weight: 300;

    border: none;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        svg {     
        transform: rotate(360deg)
        }
    }

    svg {
        margin-left: 10px;
        transition: all ease .6s;
    }
`