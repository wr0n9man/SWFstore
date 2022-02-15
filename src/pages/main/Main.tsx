import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'

import { useCards } from '../../api/useCards'
import { Card } from '../../ui/Card/Card'

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

const Grid = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
`

export const Main = () => {
  const { cards, size, setSize, incSize } = useCards()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = useCallback(() => {
    const startPagination =
      document.documentElement.scrollHeight - window.innerHeight - 50

    if (window.scrollY >= startPagination) {
      incSize()
    }
  }, [])

  return (
    <main>
      <MainHeaderContainer>
        <Title>Star Wars Figures</Title>
        <TitleSpan>
          Find the latest products for the biggest fans of the iconic saga.
        </TitleSpan>
      </MainHeaderContainer>
      <Grid>
        {cards?.map((item) => (
          <Card
            id={item.id}
            image={item.image}
            name={item.name}
            shortDescription={item.shortDescription}
            price={item.price}
          />
        ))}
      </Grid>
    </main>
  )
}
