import React from 'react'
import { BsInstagram, BsGlobe2 } from 'react-icons/bs'
import { PiTiktokLogoLight } from 'react-icons/pi'
import '../../app/globals.css'

function Footer() {
  return (
    <div className="static bottom-0 z-10 w-full h-12 bg-black text-white flex justify-evenly items-center">
      <div>Next.js template</div>
      <div>PRESENTATION</div>
      <div>DISCOVER</div>
      <div>CONTACT ME</div>
      <BsInstagram />
      <BsGlobe2 />
      <PiTiktokLogoLight />
    </div>
  )
}

export default Footer
