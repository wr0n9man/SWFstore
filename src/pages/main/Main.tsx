import React from 'react'
import styled from 'styled-components'

const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 784px;
  margin-top: 160px;
`

const Title = styled.h1`
  font-size: 6rem;
  line-height: 112%;
  text-align: center;
  font-weight: 700;
  margin: 0;
`

const TitleSpan = styled.p`
  font-size: 2rem;
  line-height: 142%;
  font-weight: 600;
  margin: 0;
  margin-top: 48px;
`

const Grid = styled.div``

export const Main = () => {
  return (
    <main>
      <MainHeaderContainer>
        <Title>Star Wars Figures</Title>
        <TitleSpan>
          Find the latest products for the biggest fans of the iconic saga.
        </TitleSpan>
      </MainHeaderContainer>
      <Grid></Grid>
    </main>
  )
}
