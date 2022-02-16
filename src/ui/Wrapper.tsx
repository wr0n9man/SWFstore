import styled from 'styled-components'

import { breakpoints } from '../constants'

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  margin-bottom: 5rem;

  @media (max-width: ${breakpoints.XL}px) {
    padding: 0 2.5rem;
  }

  @media (max-width: ${breakpoints.MD}px) {
    padding: 0 1rem;
  }

  @media (max-width: ${breakpoints.SM}px) {
    margin-bottom: 1rem;
    padding: 0 0.875rem;
  } ;
`
