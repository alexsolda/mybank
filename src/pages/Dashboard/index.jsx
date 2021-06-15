import React, {useState} from 'react';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import Brightness3RoundedIcon from '@material-ui/icons/Brightness3Rounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import {
    Container,
    MenuContainer,
    MenuItem,
    MainContainer,
    Header,
    Logo,
    Settings,
    Avatar,
    SettingButtons,
    MainContent
} from './styles';

import Home from '../../Components/Home';

function Dashboard() {

    const [componentRendered, setComponentRendered] = useState(<Home />)

    return (
        <Container>
            <MenuContainer>
                <MenuItem><HomeRoundedIcon /></MenuItem>
                <MenuItem><AccountBalanceWalletRoundedIcon /></MenuItem>
                <MenuItem><SettingsRoundedIcon /></MenuItem>
            </MenuContainer>
            <MainContainer>
                <Header>
                    <Logo alt='logo' src='/assets/img/mybank-logo-lightmode.png' />
                    <Settings>
                        <Avatar alt='avatar' src='/assets/avatar/emote-moneyface.png'/>
                        <SettingButtons><WbSunnyRoundedIcon /></SettingButtons>
                        <SettingButtons><ExitToAppRoundedIcon /></SettingButtons>
                    </Settings>
                </Header>
                <MainContent>
                    {componentRendered}
                </MainContent>
            </MainContainer>
        </Container>
    )
}

export default Dashboard;