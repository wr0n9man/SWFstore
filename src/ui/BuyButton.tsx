import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { breakpoints, colors } from '../constants'

const Button = styled.button`
  font-size: 1.5rem;
  font-family: Rubik;
  line-height: 100%;
  font-weight: 700;
  text-align: center;
  background-color: ${colors.black};
  color: ${colors.white};
  box-shadow: 0px 4px 24px ${colors.shadow};
  border: none;

  padding: 1.375rem 2rem;
  border-radius: 50px;

  &:hover {
    background: ${colors.buttonHover};
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.SM}px) {
    font-size: 1.125rem;
    padding: 1rem 1.5rem;
  }
`

type Props = {
  price: number | undefined
  id: number | undefined
}

export const BuyButton = ({ price, id }: Props) => {
  const navigate = useNavigate()
  const cardPrice = price ? price / 100 : 0

  const openProduct = () => {
    navigate(`/product/${id}`)
    window.scrollTo(0, 0)
  }

  return <Button onClick={openProduct}>Buy ${cardPrice}</Button>
}
