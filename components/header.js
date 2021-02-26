import { useEffect, useLayoutEffect, useState } from "react";

import Link from 'next/link'
import { useRouter } from "next/router";
import styled from '@emotion/styled'

import { v4 as uuidv4 } from 'uuid';

import { LabelStyle } from '../components/typography'
import Button from '../components/button'
import Icon from '../components/icon'


const NavItem = styled.a`
    ${LabelStyle}
    padding: 2.5rem 0;
    margin: 0 1.25rem;
    color: var(--mediumForeground);
    border-bottom: 1px solid transparent;
    transition: color var(--transition1), border-color var(--transition1);
    &:active, &.active {
        color: var(--foreground);
        border-bottom-color: var(--lightForeground);
    }
    &:hover, &:focus {
        outline: none;
        color: var(--lightForeground);
        border-bottom-color: var(--lightForeground);
    }
`

const StyledHeader = styled.header`
    padding-left: ${p => p.px}rem;
    padding-right: ${p => p.px}rem;
    /* background: var(--mediumBackground); */
    height: var(--headerHeight);
    backdrop-filter: blur(var(--blur2));
    position: ${p => p.position === 'static' ? 'static' : 'fixed'};
    background: var(--veryLightBackgroundInverse);
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    nav {
        padding-left: ${p => p.innerPx}rem;
        padding-right: ${p => p.innerPx}rem;
        display: flex;
        align-self: stretch;
        align-items: center;
        justify-content: space-between;
        box-shadow: inset 0 -1px 0 var(--lightestBackground);
        .leading, .trailing {
            min-width: 15rem;
        }
        .leading {
            a {
                display: flex;
                margin-top: -0.75rem;
                color: var(--foreground);
                transition: opacity var(--transition1);
                &:hover {
                    opacity: 0.8;
                }
            }
        }
        .middle {
            display: flex;
        }
        .trailing {
            display: flex;
            justify-content: flex-end;
            .hamburger-menu {
                display: none;
            }
        }
    }
    @media screen and (max-width: 996px) {
        nav {
            height: 100%;
            padding-left: calc((${p => p.innerPx}rem) / 1.5);
            padding-right: calc((${p => p.innerPx}rem) / 2.5);
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            .leading, .trailing {
                min-width: 0;
            }
            .leading {
                a {
                    margin-top: -0.5rem;
                    svg {
                        height: 1.5rem;
                        width: auto;
                    }
                }
            }
            .middle {
                display: none;
            }
            .trailing {
                .hamburger-menu {
                    margin-left: 0.5rem;
                    display: flex;
                }
            }
        }
    }
`

const MobileMenu = styled.div`
    z-index: 9;
    position: fixed;
    top: var(--headerHeight);
    width: 50%;
    right: 0;
    bottom: 0;
    display: none;
    flex-direction: column;
    text-align: center;
    background: var(--veryLightBackgroundInverse);
    backdrop-filter: blur(var(--blur2));
    box-shadow: 0 0 2rem rgba(0,0,0,0.25);
    padding: 1rem 3rem;
    .main-nav, .secondary-nav {
        display: flex;
        padding: 1.5rem 0;
        flex-direction: column;
        a {
            border-bottom: none;
            padding: 1rem;
            margin: 0;
            color: var(--lightForeground);
            clip-path: polygon(
                0% 0.5rem, 0.5rem 0%, 
                calc(100% - 0px) 0%, 100% 0.5rem, 
                100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%,
                0px 100%, 0% calc(100% - 0.5rem));
            &:not(:last-of-type) {
                margin-bottom: 0.75rem;
            }
            &:hover, &:focus {
                border-bottom: none;
                color: var(--foreground);
            }
        }
    }
    .main-nav {
        border-bottom: 1px solid var(--lightBackground);
        a {
            &.active {
                color: var(--foregroundInverse);
                background: var(--foreground);
            }
        }
    }
    .secondary-nav {
        a {
            &.active {
                color: var(--foreground);
                background: var(--mediumBackground);
            }
        }
    }
    @media screen and (max-width: 996px) {
        display: ${({ open }) => (open ? "flex" : "none")};
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        left: 0;
        overflow-y: scroll;
    }
`

const Header = ({ px, innerPx, navItems, trailing, sideMenuItems, position }) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [open]);

    const router = useRouter();

    return (
        <div className="header-wrapper">
            <StyledHeader px={px} innerPx={innerPx} position={position}>
                <nav>
                    <div className="leading">
                        <Link href="/foundation/colors" passHref><a>
                            <svg width="240" height="31" viewBox="0 0 240 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M164.22 29.0599C169.2 24.1999 191.4 3.67992 239.4 0.919922C230.58 1.69992 196.08 5.95992 172.08 30.0199H163.2L164.22 29.0599ZM74.58 15.02L77.94 10.88L92.16 30.08H85.56L82.62 26H65.46L68.4 22.88H80.28L74.58 15.02ZM22.5001 18.7999H6.54006V14.8399H27.1201C26.5801 13.1599 24.8401 11.5999 21.7801 11.5999H6.84006C3.42006 11.5999 1.44006 12.8599 1.44006 15.6199V18.5599C1.44006 20.9599 3.48006 22.3399 6.48006 22.3399H22.6201V26.5399H0.900064C1.44006 28.8199 3.18006 30.0199 6.30006 30.0199H22.5601C25.9801 30.0199 27.6601 28.6999 27.6601 25.8799V22.9399C27.6601 20.3599 25.6801 18.9799 22.5001 18.7999ZM55.08 11.6601H35.4V30.0801H40.98V23.0001H55.5C59.52 23.0001 61.74 21.6201 61.74 18.3801V16.3401C61.68 13.3401 59.16 11.6601 55.08 11.6601ZM56.88 17.5401C56.88 18.8601 56.64 19.5801 54.48 19.5801H40.98L41.04 14.7801H54.24C56.64 14.7801 56.94 15.5001 56.94 16.7601V17.5401H56.88ZM102.84 14.8399H123.72C123.18 12.6799 121.08 11.5999 118.08 11.5999H102.48C99.7799 11.5999 97.1999 12.6799 97.1999 15.6199V25.9399C97.1999 28.8799 99.7799 29.9599 102.48 29.9599H118.26C121.86 29.9599 123.12 28.9399 123.72 26.4799H102.84V14.8399ZM136.98 20.9601V26.6001H156.24V30.0801H131.34V17.8401H148.2V20.9601H136.98ZM157.08 11.6601H131.94V14.9001H157.08V11.6601ZM163.8 11.6601H172.56L178.92 16.2201C177.36 17.1201 175.62 18.2001 174.12 19.2201L163.8 11.6601ZM181.321 23.9591L181.321 23.9593L180.84 24.32L188.64 30.02H197.46L185.28 21.08C183.946 21.987 182.612 22.9889 181.321 23.9591Z" fill="currentColor"/>
                            </svg>
                        </a></Link>
                    </div>
                    {navItems && (
                        <div className="middle">
                            {navItems.map(navItem => (
                                <Link key={uuidv4()} href={navItem.href} passHref><NavItem className={router.pathname.includes(`${navItem.href}`) ? "active" : ""}>{navItem.label}</NavItem></Link>
                            ))}
                        </div>
                    )}
                    {trailing && (
                        <div className="trailing">
                            {trailing}
                            <div className="hamburger-menu">
                                <Button onClick={() => setOpen(!open)} variant="tertiary"><Icon icon="menu" /></Button>
                            </div>
                        </div>
                    )}
                </nav>
            </StyledHeader>
            <MobileMenu open={open}>
                {navItems && (
                    <div className="main-nav">
                        {navItems.map(navItem => (
                            <Link key={uuidv4()} href={navItem.href} passHref><NavItem className={router.pathname.includes(`${navItem.href}`) ? "active" : ""}>{navItem.label}</NavItem></Link>
                        ))}
                    </div>
                )}
                {sideMenuItems && (
                    <div className="secondary-nav">
                        {sideMenuItems.map(navItem => (
                            <Link key={uuidv4()} href={navItem.href} passHref><NavItem className={router.pathname.includes(`${navItem.href}`) ? "active" : ""}>{navItem.label}</NavItem></Link>
                        ))}
                    </div>
                )}
            </MobileMenu>
        </div>
    )
}

export default Header