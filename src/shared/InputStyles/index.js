import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
`

export const InputContainer = styled.div`
    position: relative;
    margin-bottom: 30px;

    input {
        transition: .2s ease-in-out;
        width: 100%;
        padding: 15px 10px;
        outline: none;

        color: #00A3FE;
        font-size: 16px;
        font-weight: 300;

        border-radius: 5px;
        border: 1px solid #00A3FE;

        transition: .6s ease-in-out;

        &:focus {
            box-shadow: 0px 3px 30px 10px rgba(0, 163, 254, 0.25);
        }

        &:hover {
            box-shadow: 0px 3px 30px 10px rgba(0, 163, 254, 0.25);
        }
    }

    label {
        top: -10px;
        left: 5px; 
        display: flex;
        align-items: center;
        position: absolute;
        cursor: text;
        transition: .2s ease-in-out;
        background-color: #FFF;
        padding: 0 5px;
        color: #00A3FE;
        font-weight: 700;
    }
`