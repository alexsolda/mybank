import React from 'react';
import SignInOutStyles from '../../shared/SignInOutStyles';
import { Form, InputContainer } from '../../shared/InputStyles';
import { ButtonStyle } from '../../shared/ButtonsStyles';

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
            <ButtonStyle solid={true}>Acessar</ButtonStyle>
            <ButtonStyle solid={false}>Cadastre-se</ButtonStyle>
        </SignInOutStyles>
    )
}

export default SignIn;