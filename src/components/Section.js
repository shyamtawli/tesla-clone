import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftbtn, rightbtn, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                    {leftbtn}
                </LeftButton>
                { rightbtn && 
                    <RightButon>
                    {rightbtn}
                </RightButon>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical 
    align-items: center; //horizontal becoz of direction flips.
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display:flex ;
    margin-bottom: 30px;
    @media (max-width: 750px){
        flex-direction: column;
    }
`

const LeftButton = styled.button`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 250px;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.8;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButon = styled(LeftButton)`
    background-color: white;
    opacity:0.6;
    color:black;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`