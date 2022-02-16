import styled from 'styled-components'

import { breakpoints } from '../../constants'

export const MainHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 784px;
  margin-top: 160px;
  height: 41.25rem;

  @media (max-width: ${breakpoints.XL}px) {
    max-width: 690px;
  }

  @media (max-width: ${breakpoints.LG}px) {
    max-width: 690px;
  }

  @media (max-width: ${breakpoints.MD}px) {
    max-width: 582px;
  }

  @media (max-width: ${breakpoints.SM}px) {
    max-width: 320px;
    height: 31.75rem;
  } ;
`

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 112%;
  text-align: center;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${breakpoints.XL}px) {
    font-size: 5.125rem;
  }

  @media (max-width: ${breakpoints.SM}px) {
    font-size: 3.5rem;
  } ;
`

export const TitleSpan = styled.p`
  font-size: 2rem;
  line-height: 142%;
  font-weight: 600;
  margin: 0;
  margin-top: 48px;

  @media (max-width: ${breakpoints.MD}px) {
    font-size: 1.75rem;
  }

  @media (max-width: ${breakpoints.SM}px) {
    font-size: 1.5rem;
  } ;
`
