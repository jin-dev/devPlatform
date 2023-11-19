import { useState } from 'react'
import Link from 'next/link'
import { MdOutlineAccountCircle } from 'react-icons/md'
import NewWindow from 'react-new-window'

interface NavProps {
  text: string
  href: string
  iconFlag?: boolean
  active?: boolean
}

const NavItem = ({ active, text, href, iconFlag }: NavProps) => {
  const [popup, setPopup] = useState(false)

  const activateAuth = () => {
    console.log('HAHA auth')
    setPopup(true)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      activateAuth()
    }
  }

  return !iconFlag ? (
    <Link href={href}>
      <div
        className={`nav__link ${active ? 'active' : ''}`}
        role="button"
        tabIndex={0}
      >
        {text}
      </div>
    </Link>
  ) : (
    <div
      className={`nav__link ${active ? 'active' : ''}`}
      role="button"
      tabIndex={0}
      onClick={activateAuth}
      onKeyPress={handleKeyPress}
    >
      {iconFlag && <MdOutlineAccountCircle />}

      {popup && <NewWindow url="/signIn" onUnload={() => setPopup(false)} />}
    </div>
  )
}

export default NavItem
