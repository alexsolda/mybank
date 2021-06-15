import React from 'react';
import { Link } from 'react-router-dom'

import SignInOutStyles from '../../shared/SignInOutStyles';
import { Form, InputContainer } from '../../shared/InputStyles';
import { ButtonStyle } from '../../shared/ButtonsStyles';

import ForwardIcon from '@material-ui/icons/Forward';

function ForgotPassword() {
    return (
        <SignInOutStyles title='Recuperar senha'>
            <Form>
                <InputContainer>
                    <input type='e-mail' required />
                    <label>E-mail</label>
                </InputContainer>
                <InputContainer>
                    <input type='email' required />
                    <label>Confirme o e-mail</label>
                </InputContainer>
            </Form>
            <ButtonStyle solid={true}>Recuperar senha <ForwardIcon /></ButtonStyle>
            <ButtonStyle solid={false}>
                <Link to='signin'>
                    Cancelar <ForwardIcon />
                </Link>
            </ButtonStyle>
        </SignInOutStyles>
    )
}

export default ForgotPassword;