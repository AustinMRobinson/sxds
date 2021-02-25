import styled from '@emotion/styled'
import { variant } from 'styled-system'


const StyledButton = styled('button')(
    {
        appearance: 'none',
        border: 'none',
        fontFamily: '"D-DINExp", sans-serif',
        fontWeight: '600',
        fontSize: 'var(--fontSize1)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--letterSpacing1)',
        position: 'relative',
        background: 'transparent',
        cursor: 'pointer',
        padding: '0.75rem 1rem',
        '&:before': {
            content: JSON.stringify(''),
            position: 'absolute',
            zIndex: '-1',
        },
        '&:after': {
            content: JSON.stringify(''),
            position: 'absolute',
            zIndex: '-2',
        },
        '&:hover, &:focus': {
            border: 'none',
            outline: 'none',
        }
    },
    variant({
        variants: {
            primary: {
                color: 'var(--foregroundInverse)',
                'span': {
                    transition: 'opacity 0.3s ease-in-out',
                },
                '&:before': {
                    background: 'var(--foreground)',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    clipPath: `polygon(
                        0% 0.5rem, 0.5rem 0%, 
                        calc(100% - 0px) 0%, 100% 0.5rem, 
                        100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%,
                        0px 100%, 0% calc(100% - 0.5rem))`,
                },
                '&:after': {
                    left: '-0.125rem',
                    right: '-0.125rem',
                    top: '-0.125rem',
                    bottom: '-0.125rem',
                    transition: 'all 0.3s ease-in-out',
                    clipPath: `polygon(
                        0% 0.575rem, 0.575rem 0%, 
                        calc(100% - 0px) 0%, 100% 0.575rem, 
                        100% calc(100% - 0.575rem), calc(100% - 0.575rem) 100%,
                        0px 100%, 0% calc(100% - 0.575rem))`,
                },
                '@media (hover: hover)': {
                    '&:hover, &:focus': {
                        'span': {
                            opacity: 0.8,
                        },
                        '&:after': {
                            background: 'var(--lightestForeground)',
                        }
                    },
                },
                '&:active': {
                    '&:after': {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    } 
                }
            },
            secondary: {
                color: 'var(--foreground)',
                '&:before': {
                    transition: 'all 0.3s ease-in-out',
                    background: 'var(--background)',
                    left: '1px',
                    right: '1px',
                    top: '1px',
                    bottom: '1px',
                    clipPath: `polygon(
                        0% 0.45rem, 0.45rem 0%, 
                        calc(100% - 0px) 0%, 100% 0.45rem, 
                        100% calc(100% - 0.45rem), calc(100% - 0.45rem) 100%,
                        0px 100%, 0% calc(100% - 0.45rem))`,
                },
                '&:after': {
                    background: 'var(--foreground)',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    clipPath: `polygon(
                        0% 0.5rem, 0.5rem 0%, 
                        calc(100% - 0px) 0%, 100% 0.5rem, 
                        100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%,
                        0px 100%, 0% calc(100% - 0.5rem))`,
                },
                '@media (hover: hover)': {
                    '&:hover, &:focus': {
                        '&:before': {
                            opacity: 0.9,
                            left: '1.5px',
                            right: '1.75px',
                            top: '2px',
                            bottom: '1.75px',
                        },
                    }
                },
            },
            tertiary: {
                padding: '0.75rem 0.75rem',
                color: 'var(--foreground)',
                '&:before': {
                    background: 'transparent',
                    transition: 'background 0.3s ease-in-out',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    clipPath: `polygon(
                        0% 0.5rem, 0.5rem 0%, 
                        calc(100% - 0px) 0%, 100% 0.5rem, 
                        100% calc(100% - 0.5rem), calc(100% - 0.5rem) 100%,
                        0px 100%, 0% calc(100% - 0.5rem))`,
                },
                '@media (hover: hover)': {
                    '&:hover, &:focus': {
                        '&:before': {
                            background: 'var(--lightBackground)',
                        }
                    },
                },
                '&:active': {
                    '&:before': {
                        background: 'var(--mediumBackground)',
                    } 
                }
            },
        }
    })
)

const Button = ({ variant, onClick, children }) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            <span>{ children }</span>
        </StyledButton>
    )
}


export default Button