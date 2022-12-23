import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
        <a>
          <img src='/images/logo.svg' alt='failed' />
        </a>
        <Menu>
          <a href='#'>Model Y</a>
          <a href='#'>Model 3</a>
          <a href='#'>Model X</a>
          <a href='#'>Model S</a>
        </Menu>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Account</a>
          <HamBurger />
        </RightMenu>

    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100vw;
  min-height: 50px;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width:750px){
    display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
margin-right: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 5px;
  }
`

const HamBurger = styled(MenuIcon)`
  cursor: pointer;

`