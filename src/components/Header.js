import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
        <Logo>
          <img src='/images/logo.svg' alt='failed' />
        </Logo>
        <Menu>
          <a href='#'>Model Y</a>
          <a href='#'>Model 3</a>
          <a href='#'>Model X</a>
          <a href='#'>Model S</a>
          <a href='#'>Solar Roof</a>
          <a href='#'>Solar Panels</a>
        </Menu>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Account</a>
          <a onClick={() => setBurgerStatus(true)}>Menu</a>
        </RightMenu>
        <BurgerNav status={burgerStatus}>
          <CloseDiv>
            <CustomeClose onClick={() => setBurgerStatus(false)}/>
          </CloseDiv>
          <li><a href='#'>Existing Inventory</a></li>
          <li><a href='#'>Used Inventory</a></li>
          <li><a href='#'>Trade-In</a></li>
          <li><a href='#'>Demo Drive</a></li>
          <li><a href='#'>Insurance</a></li>
          <li><a href='#'>Cybertruck</a></li>
          <li><a href='#'>Roadaster</a></li>
          <li><a href='#'>Semi</a></li>
          <li><a href='#'>Charging</a></li>
          <li><a href='#'>Powerwall</a></li>
          <li><a href='#'>Commerical Energy</a></li>
          <li><a href='#'>Find Us</a></li>
        </BurgerNav>

    </Container>
  )
}

export default Header

const Logo = styled.div`

  width: 100px;
  img{
    width: 100px;
  }
`

const Container = styled.div`
  width: 100vw;
  min-height: 50px;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a{
    font-weight: 600;
    padding:5px 15px;
    flex-wrap: nowrap;
  }

  a:hover{
    background-color: rgba(242, 242, 242, 0.18);
    
  }
  @media (max-width:1100px){
    display: none;
  }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
margin-right: 10px;
  a {
    font-weight: 600;
    padding: 5px 15px;
    margin-right: 5px;
    cursor: pointer;
  }

  a:hover{
    background-color: rgba(242, 242, 242, 0.18);
  }
  
`

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'} ;
  transition: transform 0.2s;
  /* justify-content: space-between; */

  li {
    padding: 15px 10px;
    /* border-bottom: 1px solid rgba(0,0,0,0.2); */

    a{
      font-weight: 600;
    }
  }

  li:hover{
    background-color: rgba(220,220,220,0.2);
    border-radius: 2px;
  }
`

const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
`

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`