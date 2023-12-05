'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'components/styles/theme'
import GlobalStyle from 'components/styles/GlobalStyles'

import Footer from 'components/footer/footer'
import dynamic from 'next/dynamic'

const Section1 = dynamic(() => import('pages/section1'))

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section1 />
      <Footer />
    </ThemeProvider>
  )
}
