import React from 'react'
import styled from 'styled-components'

import { Card } from '../../ui/Card/Card'
import { ICard } from '../../ui/Card/CardInterface'
import { Grid } from '../../ui/Grid'

type Props = {
  relativeCards?: ICard[]
}

const Title = styled.h3`
  font-weight: bold;
  font-size: 3.5rem;
  line-height: 112%;
`

export const RelatedFigures = ({ relativeCards }: Props) => {
  return (
    <>
      <Title>Related Figures</Title>
      <Grid>
        {relativeCards?.map((item) => (
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
    </>
  )
}
