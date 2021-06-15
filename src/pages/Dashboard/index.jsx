import React from 'react';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

import {
    Container,
    MenuContainer,
    MenuItem,
    MainContainer
} from './styles';

function Dashboard() {
    return (
       <Container>
           <MenuContainer>
               <MenuItem><HomeRoundedIcon /></MenuItem>
               <MenuItem><AccountBalanceWalletRoundedIcon /></MenuItem>
               <MenuItem><PersonRoundedIcon /></MenuItem>
           </MenuContainer>
           <MainContainer>main</MainContainer>
       </Container>
    )
}

export default Dashboard;