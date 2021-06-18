import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';

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
    ArrowInfo,
    ButtonOptions
} from './styles';

import ColorOption from '../../shared/ColorOption';

import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';


import { Title, ContainerContent } from '../../shared/ComponentsStyles';

function Home() {

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
                            <Swiper spaceBetween={30} >
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB5FA'></ColorOption>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ColorOption bgColor='DBB6EC'></ColorOption>
                                </SwiperSlide>
                            </Swiper>
                            <ArrowInfo><SettingsEthernetIcon /></ArrowInfo>
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