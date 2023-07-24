import Link from "next/link";

const NavItem = ({ text, href, active } : any)  => {
    return (
        <Link href={href} legacyBehavior>
            <a className={'nav__link'}>{text}</a>
        </Link>
    );
};

export default NavItem;