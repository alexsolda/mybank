import React from 'react';
import { Link } from 'react-router-dom';

import SignInOutStyles from '../../shared/SignInOutStyles';
import { Form, InputContainer } from '../../shared/InputStyles';
import { ButtonStyle } from '../../shared/ButtonsStyles';

import ForwardIcon from '@material-ui/icons/Forward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function SignUp() {
    return (
        <SignInOutStyles title='Cadastro'>
            <Form>
                <InputContainer>
                    <input type='text' required />
                    <label>Nome Completo</label>
                </InputContainer>

                <InputContainer>
                    <input type='email' required />
                    <label>E-mail</label>
                </InputContainer>

                <InputContainer>
                    <input type='password' required />
                    <label>Senha</label>
                </InputContainer>

                <InputContainer>
                    <input type='password' required />
                    <label>Confirmação da senha</label>
                </InputContainer>
            </Form>
            <ButtonStyle solid={true}>Cadastrar <ForwardIcon /></ButtonStyle>
            <ButtonStyle solid={false}>
                <Link to='/signin'>
                    Voltar <ExitToAppIcon />
                </Link>
            </ButtonStyle>
        </SignInOutStyles>
    )
}

export default SignUp;