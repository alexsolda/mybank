import React, {useState, useRef} from 'react';

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
    ArrowControl,
    ButtonOptions
} from './styles';

import ColorOption from '../../shared/ColorOption';

import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';


import { Title, ContainerContent } from '../../shared/ComponentsStyles';

function Home() {

    const [dinamicWidth, setDinamicWidth] = useState(40);
    const colorPicker = useRef();

    const handleLeftArrow = () => {
        let x = dinamicWidth + 50;
        if(x > 0) {
            x = 40;
        }
        setDinamicWidth(x);
        console.log(x)
    };

    const handleRightArrow = () => {
        let x = dinamicWidth - 50;
        let colorPickerWidth = 16 * 37;

        if(x < (colorPickerWidth - 950)) {
            return
        }

        setDinamicWidth(x)

    };

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
                            <ArrowControl position='left' onClick={handleLeftArrow}><KeyboardArrowLeftRoundedIcon /></ArrowControl>
                            <ArrowControl position='right' onClick={handleRightArrow}><KeyboardArrowRightRoundedIcon /></ArrowControl>
                            <ColorPicker ref={colorPicker} scroll={dinamicWidth} width='607'>
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
                    <ButtonOptions bgColor='#00ACEE'>Criar <PlaylistAddIcon /></ButtonOptions>
                </ContentOption>

                <ContentOption>
                    <OptionTitle bgColor='#BDECB6'>Deposito</OptionTitle>
                    <FormContainer>
                        <label>Valor</label>
                        <InputOption bgColor='#D5F7D0' />
                        <label>Descrição:</label>
                        <InputOption bgColor='#D5F7D0' />
                    </FormContainer>
                    <ButtonOptions bgColor='#BDECB6'>Depositar <AddBoxIcon /></ButtonOptions>
                </ContentOption>

                <ContentOption>
                    <OptionTitle bgColor='#FF6961'>Saque</OptionTitle>
                    <FormContainer>
                        <label>Valor</label>
                        <InputOption bgColor='#FFA5A0' />
                        <label>Descrição:</label>
                        <InputOption bgColor='#FFA5A0' />
                    </FormContainer>
                    <ButtonOptions bgColor='#FF6961'>Sacar <IndeterminateCheckBoxIcon /></ButtonOptions>
                </ContentOption>
            </ContainerOptions>
        </>
    )
}

export default Home;