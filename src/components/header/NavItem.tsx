import Link from 'next/link'

interface NavProps {
  text: string
  href: string
  active?: boolean // Declared as optional with `?`
}

const NavItem = ({ text, href, active }: NavProps) => {
  return (
    <Link href={href}>
      <div className="nav__link">{text}</div>
    </Link>
  )
}

export default NavItem
