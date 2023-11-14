'use client'

import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { signOut, useSession } from 'next-auth/react'
import { theme } from 'components/styles/theme'
import GlobalStyle from 'components/styles/GlobalStyles'
import Section1 from 'pages/section1'
import Section2 from 'pages/section2'
import Section3 from 'pages/section3'
import TestSection from 'pages/testSection'
import Login from 'components/Login'
import Footer from 'components/footer/footer'

export default function Home() {
  const session = useSession()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Section1 />
      <Section2 />
      <Login />
      <Footer />
    </ThemeProvider>
  )
}
