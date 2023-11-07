import React from 'react'
import { styled } from 'styled-components'
import { BsInstagram, BsGlobe2 } from 'react-icons/bs'
import { PiTiktokLogoLight } from 'react-icons/pi'

const FooterSection = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  color: white;
`

function Footer() {
  return (
    <FooterSection>
      <div>Next.js template</div>
      <div>PRESENTATION</div>
      <div>DISCOVER</div>
      <div>CONTACT ME</div>
      <BsInstagram />
      <BsGlobe2 />
      <PiTiktokLogoLight />
    </FooterSection>
  )
}

export default Footer
