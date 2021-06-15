import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #ECF8FF;

    display: flex;
`

export const MenuContainer = styled.div`
    background-color: #00ACEE;

    width: 250px;

    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

`

export const MenuItem = styled.div`
    background-color: #FFF;

    border-radius: 50%;

    margin: 10px 0;

    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #001D40;
        svg {
            transform: translateY(-3px);
            color: #FFF;
        }
    }

    svg {
        color: #001D40;
        font-size: 30px;
        transition: .6s ease;
    }
`

export const MainContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 40px 40px; 
`

export const Header = styled.div`
    background-color: #FFF;
    width: 100%;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 0px 15px 3px rgba(0, 29, 64, 0.1);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
    margin-bottom: 20px;
`

export const Logo = styled.img`
    width: 100px;
    height: auto;
`

export const Settings = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Avatar = styled.img`
    width: 50px;
    height: auto;

    border-radius: 50%;
`

export const SettingButtons = styled.div`
    width: 50px;
    height: 50px;

    background-color: transparent;
    
    border-radius: 50%;
    border: 1px solid #00ACEE;

    margin-left: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        svg{
            transform: translateY(-3px);
        }
    }

    svg {
        color: #00ACEE;
        transition: .6s ease;
    }
`

export const MainContent = styled.div`
    flex: 1;
`