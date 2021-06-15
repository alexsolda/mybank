import React from 'react';

import {
    ContainerGreetings,
    ContentGreetings,
    DateTime,
    ContainerData,
    DataInfo,
    DataTitle,
    DataValue
} from './styles';

import {Title, ContainerContent} from '../../shared/ComponentsStyles';

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
        </>
    )
}

export default Home;