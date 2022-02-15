import React from 'react'
import styled from 'styled-components'

import { Logo } from './icons/Logo'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 120px;
  align-items: center;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  )
}
