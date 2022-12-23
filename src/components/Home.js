import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftbtn="Buy Now"
          rightbtn="Custom Order"
        />
        <Section 
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftbtn="Buy Now"
          rightbtn="Custom Order"
        />
        <Section 
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftbtn="Buy Now"
          rightbtn="Custom Order"
        />
        <Section 
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftbtn="Buy Now"
          rightbtn="Custom Order"
        />
        <Section 
          title="Lowest Cost Solar Panel in America"
          description="Money-Back guarantee"
          backgroundImg="solar-panel.jpg"
          leftbtn="Order Now"
          rightbtn="Learn more"
        />
        <Section 
          title="Solar for New Roofs"
          description="Solar Roof Costs Less than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftbtn="Order Now"
          rightbtn="Learn more"
        />
        <Section 
          title="Accessories"
          backgroundImg="accessories.jpg"
          leftbtn="Shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`