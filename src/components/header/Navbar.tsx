/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItem from './NavItem'

interface MenuItem {
  text: string
  href: string
  iconFlag?: boolean
}

const MENU_LIST: MenuItem[] = [
  { text: 'Home', href: '/' },
  { text: 'Reservation', href: '/openClass' },
  { text: 'Account', href: '', iconFlag: true },
]

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<boolean | null>(null)
  const [activeIdx, setActiveIdx] = useState<number>(-1)

  /*
  <Image
  width={180}
  height={80}
  alt="logo_example"
  src="" // "https://drive.google.com/uc?id=1kwHpVnRlVwKZe0eSnQFLNYckv9gn_qOF"
/>
*/
  return (
    <header>
      <nav className="nav">
        <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
          <div />
          <div />
          <div />
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
