import React, {useState} from 'react';

import {
    ContainerGreetings,
    ContentGreetings,
    DateTime,
    ContainerData,
    DataInfo,
    DataTitle,
    DataValue,
    ContainerOptions,
    ContentOption,
    OptionTitle,
    FormContainer,
    InputOption,
    ColorsContainer,
    ColorPicker,
    ArrowControl
} from './styles';

import ColorOption from '../../shared/ColorOption';

import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import { Title, ContainerContent } from '../../shared/ComponentsStyles';

function Home() {

    const [dinamicWidth, setDinamicWidth] = useState(100);

    const handleLeftArrow = () => {};

    const handleRightArrow = () => {};

    return (
        <>
            <Title>Home</Title>
            <ContainerContent>
                <ContainerGreetings>
                    <ContentGreetings>Olá, Alex Solda!</ContentGreetings>
                    <DateTime>15 de junho de 2021</DateTime>
                </ContainerGreetings>
                <ContainerData>
                    <DataInfo bgColor='#00ACEE'>
                        <DataTitle>Total</DataTitle>
                        <DataValue>R$7.000,00</DataValue>
                    </DataInfo>

                    <DataInfo bgColor='#BDECB6'>
                        <DataTitle>Entradas</DataTitle>
                        <DataValue>R$700,00</DataValue>
                    </DataInfo>

                    <DataInfo bgColor='#FF6961'>
                        <DataTitle>Saídas</DataTitle>
                        <DataValue>R$7,00</DataValue>
                    </DataInfo>
                </ContainerData>
            </ContainerContent>

            <ContainerOptions>
                <ContentOption>
                    <OptionTitle bgColor='#00ACEE'>Criar conta</OptionTitle>
                    <FormContainer>
                        <label>Título</label>
                        <InputOption bgColor='#D2EFFF' />

                        <ColorsContainer>
                            <label>Personalizar:</label>
                            <ArrowControl position='left' scroll={dinamicWidth} onClick={handleLeftArrow}><KeyboardArrowLeftRoundedIcon /></ArrowControl>
                            <ArrowControl position='right' onClick={handleRightArrow}><KeyboardArrowRightRoundedIcon /></ArrowControl>
                            <ColorPicker width='607'>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                                <ColorOption bgColor='DBB6EC'></ColorOption>
                            </ColorPicker>
                        </ColorsContainer>
                    </FormContainer>
                </ContentOption>

                <ContentOption>
                    <OptionTitle bgColor='#BDECB6'>Depositar</OptionTitle>
                    <FormContainer>
                        <label>Valor</label>
                        <InputOption bgColor='#D5F7D0' />
                    </FormContainer>
                </ContentOption>

                <ContentOption>
                    <OptionTitle bgColor='#FF6961'>Sacar</OptionTitle>
                    <FormContainer>
                        <label>Valor</label>
                        <InputOption bgColor='#FFA5A0' />
                    </FormContainer>
                </ContentOption>
            </ContainerOptions>
        </>
    )
}

export default Home;