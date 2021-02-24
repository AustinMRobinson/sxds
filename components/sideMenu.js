import Link from 'next/link'
import { useRouter } from "next/router";
import styled from '@emotion/styled'

import { v4 as uuidv4 } from 'uuid';

import { LabelStyle } from '../components/typography'


const SideMenuItem = styled.a`
    ${LabelStyle}
    padding: 0.75rem 1rem;
    color: var(--foreground);
    transition: color var(--transition2), background var(--transition2);
    clip-path: polygon(
        0% 0.5rem, 0.5rem 0%, 
        calc(100% - 0px) 0%, 100% 0px, 
        100% calc(100% - 0px), calc(100% - 0.5rem) 100%,
        0px 100%, 0% calc(100% - 0.5rem));
    &:not(:last-of-type) {
        margin-bottom: 0.75rem;
    }
    &.active, &:active {
        background: var(--lightBackground);
    }
    &:hover, &:focus {
        outline: none;
        color: var(--mediumForeground);
        background: var(--mediumBackground);
    }
`

const StyledSideMenu = styled.aside`
    width: var(--sideMenuWidth);
    position: fixed;
    top: var(--headerHeight);
    left: 0;
    bottom: 0;
    border-right: 1px solid var(--lightestBackground);
    nav {
        display: flex;
        flex-direction: column;
        padding: 1.25rem 0 1.25rem 1.5rem;
    }
    @media screen and (max-width: 996px) {
        display: none;
    }
`

const SideMenu = ({ sideMenuItems }) => {

    const router = useRouter();

    return (
        <StyledSideMenu>
            {sideMenuItems && (
                <nav>
                    {sideMenuItems.map(menuItem => (
                        <Link key={uuidv4()} href={menuItem.href} passHref><SideMenuItem className={router.pathname.includes(`${menuItem.href}`) ? "active" : ""}>{menuItem.label}</SideMenuItem></Link>
                    ))}
                </nav>
            )}
        </StyledSideMenu>
    )
}

export default SideMenu