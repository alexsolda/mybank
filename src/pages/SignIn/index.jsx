import React from 'react';
import { Link } from 'react-router-dom'

import SignInOutStyles from '../../shared/SignInOutStyles';
import { Form, InputContainer } from '../../shared/InputStyles';
import {ForgotPassword} from './styles';
import { ButtonStyle } from '../../shared/ButtonsStyles';

import ForwardIcon from '@material-ui/icons/Forward';

function SignIn() {
    return (
        <SignInOutStyles title='Login'>
            <Form>
                <InputContainer>
                    <input id='email' type='e-mail' required />
                    <label for='email'>E-mail</label>
                </InputContainer>
                <InputContainer>
                    <input id='password' type='password' required />
                    <label for='password'>Senha</label>
                </InputContainer>
            </Form>
            <ForgotPassword>
                <Link to='/forgotpassword'>esqueci a senha :(</Link>
            </ForgotPassword>
            <ButtonStyle solid={true}>Acessar <ForwardIcon /></ButtonStyle>
            <ButtonStyle solid={false}>
                <Link to='signup'>
                    Cadastre-se <ForwardIcon />
                </Link>
            </ButtonStyle>
        </SignInOutStyles>
    )
}

export default SignIn;