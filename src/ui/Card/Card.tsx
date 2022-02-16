import React from 'react'
import styled from 'styled-components'

import { colors } from '../../constants'
import { baseUrl } from '../../constants/urls'
import { BuyButton } from '../BuyButton'
import { ICard } from './CardInterface'

const Container = styled.div`
  width: 100%;
  background: ${colors.cardBackground};
  border-radius: 48px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const CardName = styled.h2`
  font-size: 2rem;
  line-height: 132%;
  font-weight: 700;
  text-align: center;
  color: ${colors.cardTitle};
`

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 154%;
  font-weight: 400;
  text-align: center;
  color: ${colors.cardDescription};
`

const Image = styled.img`
  object-fit: contain;
  border-radius: 48px;
  width: 100%;
`

export const Card = ({ id, shortDescription, image, name, price }: ICard) => {
  const imageUrl = baseUrl + image

  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <div>
        <CardName>{name}</CardName>
        <Description>{shortDescription}</Description>
      </div>
      <BuyButton price={price} id={id} />
    </Container>
  )
}
