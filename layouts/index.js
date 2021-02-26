import { useContext } from 'react'
import Head from "next/head";

import styled from '@emotion/styled'
// import { MDXProvider } from '@mdx-js/react'
import { ThemeContext } from 'use-theme-switcher';

import Button from '../components/button'
import Header from '../components/header'
import SideMenu from '../components/sideMenu';
import Icon from '../components/icon';

const ThemeToggler = ({ theme, setTheme }) => {

    // const [theme, setTheme] = React.useState('dark')
    // const nextTheme = theme === 'dark' ? 'light' : 'dark'

    // var nextTheme = theme
    // switch (nextTheme) {
    //     case 'dark':
    //         nextTheme = 'light';
    //         break;
    //     case 'light':
    //         nextTheme = 'void';
    //         break;
    //     case 'space':
    //         nextTheme = 'dark';
    //         break;
    //     default: 
    //         nextTheme = 'dark';
    // }

    // React.useEffect(() => {
    //     document.body.dataset.theme = theme
    // }, [theme])

    const myThemes = [
        {
            id: "theme-dark",
            name: "Dark",
        },
        {
            id: "theme-light",
            name: "Light",
        },
        {
            id: "theme-void",
            name: "Void",
        }
    ]

    if (theme) {
        return (
            <>
                {myThemes.map((item, index) => {
                const nextTheme = myThemes.length -1 === index ? myThemes[0].id : myThemes[index+1].id;
                
                return item.id === theme ? (
                    <div key={item.id}>
                        <Button variant="tertiary" onClick={() => setTheme(nextTheme)}>
                            <Icon icon="sun" />
                        </Button>
                    </div>
                ) : null;
                    }
                )}
            </>
        )
    }
}

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    .content, .secondary-content {
        flex-grow: 1;
        display: flex;
        top: var(--headerHeight);
        position: relative;
        main {
            width: 100%;
            padding: 4rem;
            position: static;
        }
    }
    .content {
        main {
            width: calc(100% - var(--sideMenuWidth));
            top: var(--headerHeight);
            position: fixed;
            left: var(--sideMenuWidth);
            right: 0;
            bottom: 0;
            overflow-y: scroll;
            padding: 4rem;
            /* overflow-y: scroll; */
        }
    }
    footer {
        position: relative;
        top: var(--headerHeight);
    }
    @media screen and (max-width: 1200px) {
        .secondary-content {
            main {
                padding: 3.5rem 3rem;
            }
        }
    }
    @media screen and (max-width: 996px) {
        .content {
            position: relative;
            overflow: auto;
            top: var(--headerHeight);
            main {
                width: 100%;
                position: relative;
                top: 0;
                padding: 3rem 2.5rem;
                overflow: auto;
            }
        }
        .secondary-content {
            main {
                padding: 3rem 2rem;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .content {
            main {
                padding: 2rem 0.5rem;
            }
        }
        .secondary-content {
            main {
                padding: 2.5rem 1rem;
            }
        }
    }
`

const Layout = ({ title, description, currentURL, children, sideMenuItems }) => {

    const { theme, switchTheme } = useContext(ThemeContext);

    const previewImage = "/images/spacexds-og-image.jpg"

    const navItems = [
        {
            href: '/foundation',
            label: 'Foundation',
        },
        {
            href: '/components',
            label: 'Components',
        },
        {
            href: '/resources',
            label: 'Resources',
        },
    ]

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                {/* General */}
                <title>{title} / SpaceX Design System</title>
                <meta name="description" content={description} />

                {/* Open Graph */}
                <meta property="og:url" content={`https://spacexds.vercel.app/${currentURL}`} key="ogurl" />
                <meta property="og:image" content={previewImage} key="ogimage" />
                <meta property="og:site_name" content="SpaceX Design System" key="ogsitename" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/images/spacexds-favicon-16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/images/spacexds-favicon-32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/images/spacexds-favicon-96.png" sizes="96x96" />

                {/* Loading assets */}
                <link rel="preload" href="/fonts/d-din/D-DIN.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/d-din/D-DIN-Italic.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/d-din/D-DIN-Bold.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/d-din/D-DINExp.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/d-din/D-DINExp-Bold.woff" as="font" crossOrigin="" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
            </Head>
            <StyledLayout>
                <Header 
                    innerPx={2}
                    navItems={navItems}
                    sideMenuItems={sideMenuItems}
                    trailing={(<ThemeToggler theme={theme ? theme : 'theme-dark'} setTheme={switchTheme} /> )} 
                />
                {sideMenuItems
                    ? (
                        <div className="content">
                            <SideMenu sideMenuItems={sideMenuItems} />
                            <main>
                                { children }
                            </main>
                        </div>
                    )
                    : (
                        <div className="secondary-content">
                            <main>
                                { children }
                            </main>
                        </div>
                    )}
                {/* <footer>Footer</footer> */}
            </StyledLayout>
        </>
    )
}

export default Layout