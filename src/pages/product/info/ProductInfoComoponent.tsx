import styled from 'styled-components'

import { breakpoints, colors } from '../../../constants'

export const Card = styled.div`
  display: flex;
  max-width: 100rem;
  height: 921px;
  margin-bottom: 5.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 110px;
  background-color: ${colors.cardBackground};
  border-radius: 48px;

  @media (max-width: ${breakpoints.LG}px) {
    flex-direction: column;
    height: auto;

    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.SM}px) {
    padding: 2rem;
  }
`
export const Image = styled.img`
  object-fit: contain;
  max-width: 605px;

  @media (max-width: ${breakpoints.SM}px) {
    width: 90%;
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.5rem;

  @media (max-width: ${breakpoints.SM}px) {
    width: 90%;
  }
`
export const Title = styled.h2`
  font-weight: 700;
  font-size: 4.875rem;
  line-height: 112%;

  @media (max-width: ${breakpoints.SM}px) {
    font-size: 3rem;
    text-align: center;
  }
`

export const Description = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 142%;
  text-align: left;

  @media (max-width: ${breakpoints.SM}px) {
    font-size: 1.25rem;
  }
`

export const EmailField = styled.form`
  display: flex;
  border: 2px solid ${colors.inputBorder};
  background: ${colors.inputBackground};
  border-radius: 4.5rem;
  height: 5.25rem;
  align-items: center;
  padding: 0 0.5rem;
  margin-right: 50px;

  &:focus-within {
    border: 2px solid ${colors.buttonHover};
  }

  @media (max-width: ${breakpoints.SM}px) {
    margin-right: 0;
  }
`

export const EmailInput = styled.input`
  height: 80%;
  border: none;
  width: 60%;
  border-radius: 72px;
  font-size: 1.5rem;
  padding: 0 2rem;
  outline: none;

  &::-webkit-input-placeholder {
    font-weight: 500;
    line-height: 142%;

    color: ${colors.cardTitle};
  }
`

export const InputButton = styled.button`
  border: none;
  background: ${colors.black};
  width: 40%;
  height: 80%;
  color: ${colors.white};

  font-family: Rubik;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 100%;

  box-shadow: 0px 4px 24px ${colors.shadow};
  border-radius: 50px;
`
