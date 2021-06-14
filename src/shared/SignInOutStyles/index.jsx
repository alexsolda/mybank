import React from 'react';
import { ContainerBackground, Content, Logo, Title } from './styles';

function SignInOutStyles({children, title}) {
    return (
        <ContainerBackground>
            <Content>
                <Logo alt='logo' src='/assets/img/mybank-logo-lightmode.png' />
                <Title>{title}</Title>
                {children}
            </Content>
        </ContainerBackground>
    )
}

export default SignInOutStyles;