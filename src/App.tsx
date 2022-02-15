import React from 'react'

import { GlobalStyle } from './globalStyles'
import { Main } from './pages/main/Main'
import { Header } from './ui/Header'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  )
}
