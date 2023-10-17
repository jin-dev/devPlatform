'use client'

import React, { Fragment, memo, useState } from 'react'
import styled from 'styled-components'

import './globals.css'

import Section1 from 'pages/section1'
import Section2 from 'pages/section2'
import Section3 from 'pages/section3'
import Footer from 'components/footer/footer'

export default function Home() {
  const [no, setNo] = useState(0)

  const WholeSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `

  return (
    <WholeSection>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </WholeSection>
  )
}
