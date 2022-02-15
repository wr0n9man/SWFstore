import React from 'react'
import styled from 'styled-components'

import { colors } from '../../constants'
import { urls } from '../../constants/urls'
import { ICard } from './CardInterface'

const Container = styled.div`
  width: 100%;
  background: ${colors.cardBackground};
  border-radius: 48px;
  padding: 40px;
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
const BuyButton = styled.button`
  font-size: 1.5rem;
  font-family: Rubik;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  background-color: ${colors.text};
  color: ${colors.white};

  padding: 22px 32px;
  width: 196px;
  border-radius: 50px;
`

const Image = styled.img`
  object-fit: contain;
  border-radius: 48px;
  width: 100%;
`

export const Card = ({ id, shortDescription, image, name, price }: ICard) => {
  const imageUrl = urls.base + image

  return (
    <Container>
      <Image src={imageUrl} />
      <CardName>{name}</CardName>
      <Description>{shortDescription}</Description>
      <BuyButton>{price}</BuyButton>
    </Container>
  )
}
