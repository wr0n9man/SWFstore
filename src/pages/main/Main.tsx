import React, { useCallback, useEffect } from 'react'

import { useCards } from '../../api/useCards'
import { Card } from '../../ui/Card/Card'
import { Grid } from '../../ui/Grid'
import { MainHeaderContainer, Title, TitleSpan } from './MainComponents'

export const Main = () => {
  const { cards, size, setSize, totalPage } = useCards()

  const handleScroll = useCallback(() => {
    const startPagination =
      document.documentElement.scrollHeight - window.innerHeight - 50

    if (window.scrollY >= startPagination) {
      if (totalPage && size < totalPage) setSize(size + 1)
    }
  }, [totalPage, size])

  useEffect(() => {
    if (totalPage) {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [totalPage])

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
            key={item.id}
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
