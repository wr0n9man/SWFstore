import styled from 'styled-components'

import { breakpoints } from '../constants'

export const Grid = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: auto;
  margin-bottom: 5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${breakpoints.XL}px) {
    gap: 1.5rem;
    padding: 0 2.5rem;
  }

  @media (max-width: ${breakpoints.MD}px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }

  @media (max-width: ${breakpoints.SM}px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 0 0.875rem;
  } ;
`
