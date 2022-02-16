import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Logo } from './icons/Logo'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;
`

export const Header = () => {
  const navigate = useNavigate()

  const onClickLogo = () => {
    navigate(`/`)
    window.scrollTo(0, 0)
  }

  return (
    <HeaderWrapper>
      <div onClick={onClickLogo}>
        <Logo />
      </div>
    </HeaderWrapper>
  )
}
