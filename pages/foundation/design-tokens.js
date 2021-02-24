import styled from '@emotion/styled'

import { v4 as uuidv4 } from 'uuid';

import DocTemplate from '../../layouts/docTemplate'
import { List, ListItem } from '../../components/list'
import { Subtitle, Body, Caption } from '../../components/typography'


const TokensSection = styled.section`
`

const TokenGroup = styled.div`
    margin-bottom: 2.5rem;
    ${Subtitle} {
        margin-bottom: 1rem;
    }
    > ul {
        > li {
            .trailing {
                ${Caption} {
                    color: var(--mediumForeground);
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 1.75rem;
        ${Subtitle} {
            margin-bottom: 0.5rem;
        }
    }
`

const ColorLeading = styled.div`
    display: flex;
    align-items: center;
    .color {
        flex-shrink: 0;
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 0.5rem;
        background: ${p => p.color};
        border: 1px solid var(--lightestBackground);
    }
    @media screen and (max-width: 576px) {
        .color {
            width: 1.25rem;
            height: 1.25rem;
        }
    }
`

const Tokens = () => {

    const tokenList = [
        {
            name: 'Borders',
            id: 'border',
            values: [
                {
                    name: 'borderSmall',
                    value: '0.5px',
                },
                {
                    name: 'borderMedium',
                    value: '1px',
                },
                {
                    name: 'borderLarge',
                    value: '0.25rem',
                },
                {
                    name: 'borderXL',
                    value: '0.5rem',
                },
            ]
        },
        {
            name: 'Blurs',
            id: 'blur',
            values: [
                {
                    name: 'blurSmall',
                    value: '3rem',
                },
                {
                    name: 'blurMedium',
                    value: '4.5rem',
                },
                {
                    name: 'blurLarge',
                    value: '6rem',
                },
                {
                    name: 'blurXL',
                    value: '9rem',
                },
            ],
        },
        {
            name: 'Breakpoints',
            id: 'breakpoint',
            values: [
                {
                    name: 'breakpointXl',
                    value: '1400px',
                },
                {
                    name: 'breakpointLg',
                    value: '1200px',
                },
                {
                    name: 'breakpointMd',
                    value: '996px',
                },
                {
                    name: 'breakpointSm',
                    value: '768px',
                },
                {
                    name: 'breakpointXs',
                    value: '576px',
                },
            ],
        },
        {
            name: 'Colors',
            id: 'color',
            values: [
                {
                    name: 'background',
                    value: '#000000',
                },
                {
                    name: 'foregroundInverse',
                    value: '#000000',
                },
                {
                    name: 'mediumBackgroundInverse',
                    value: 'rgba(0,0,0,0.05)',
                },
                {
                    name: 'lightBackgroundInverse',
                    value: 'rgba(0,0,0,0.10)',
                },
                {
                    name: 'lighestBackgroundInverse',
                    value: 'rgba(0,0,0,0.20)',
                },
                {
                    name: 'mediumBackground',
                    value: 'rgba(255,255,255,0.05)',
                },
                {
                    name: 'lightBackground',
                    value: 'rgba(255,255,255,0.10)',
                },
                {
                    name: 'lightestBackground',
                    value: 'rgba(255,255,255,0.20)',
                },
                {
                    name: 'lightestForeground',
                    value: 'rgba(255,255,255,0.40)',
                },
                {
                    name: 'lightForeground',
                    value: 'rgba(255,255,255,0.60)',
                },
                {
                    name: 'mediumForeground',
                    value: 'rgba(255,255,255,0.80)',
                },
                {
                    name: 'foreground',
                    value: '#ffffff',
                },
                {
                    name: 'negative',
                    value: '#f25353',
                },
                {
                    name: 'warning',
                    value: '#f6954e',
                },
                {
                    name: 'positive',
                    value: '#57da7c',
                },
            ],
        },
        {
            name: 'Font Sizes',
            id: 'font-size',
            values: [
                {
                    name: 'fontSize0',
                    value: '0.75rem',
                },
                {
                    name: 'fontSize1',
                    value: '0.875rem',
                },
                {
                    name: 'fontSize2',
                    value: '1rem',
                },
                {
                    name: 'fontSize3',
                    value: '1.25rem',
                },
                {
                    name: 'fontSize4',
                    value: '1.75rem',
                },
                {
                    name: 'fontSize5',
                    value: '2.5rem',
                },
                {
                    name: 'fontSize6',
                    value: '3.5rem',
                },
                {
                    name: 'fontSize7',
                    value: '4.5rem',
                },
                {
                    name: 'fontsize8',
                    value: '5.5rem',
                },
                {
                    name: 'fontsize9',
                    value: '7rem',
                },
            ],
        },
        {
            name: 'Line Heights',
            id: 'line-height',
            values: [
                {
                    name: 'lineHeight0',
                    value: '1.15',
                },
                {
                    name: 'lineHeight1',
                    value: '1.3',
                },
                {
                    name: 'lineHeight2',
                    value: '1.5',
                },
            ],
        },
        {
            name: 'Radiuses\'eses\'(es)',
            id: 'radius',
            values: [
                {
                    name: 'radiusSmall',
                    value: '0.5rem',
                },
                {
                    name: 'radiusMedium',
                    value: '0.75rem',
                },
                {
                    name: 'radiusLarge',
                    value: '1rem',
                },
                {
                    name: 'radiusXL',
                    value: '1.25rem',
                },
            ],
        },
        {
            name: 'Shadows',
            id: 'shadow',
            values: [
                {
                    name: 'shadowSmall',
                    value: '0 0.125rem 0.125rem',
                },
                {
                    name: 'shadowMedium',
                    value: '0 0.25rem 0.25rem',
                },
                {
                    name: 'shadowLarge',
                    value: '0 0.5rem 0.75rem',
                },
            ],
        },
        {
            name: 'Transitions',
            id: 'transition',
            values: [
                {
                    name: 'transition0',
                    value: '200ms ease-in-out',
                },
                {
                    name: 'transition1',
                    value: '300ms ease-in-out',
                },
                {
                    name: 'transition2',
                    value: '400ms ease-in-out',
                },
                {
                    name: 'transition3',
                    value: '500ms ease-in-out',
                },
            ],
        },
        {
            name: 'Z-Indexes',
            id: 'z-index',
            values: [
                {
                    name: 'indexBase',
                    value: '1',
                },
                {
                    name: 'indexContainer',
                    value: '2',
                },
                {
                    name: 'indexSticky',
                    value: '8',
                },
                {
                    name: 'indexFixed',
                    value: '12',
                },
                {
                    name: 'indexOverlay',
                    value: '20',
                },
            ],
        },
    ]


    return (
        <DocTemplate
            title="Design Tokens"
            description="Design tokens make up the single source of truth for the entire system. These constants are used to keep consistency across design and development and can be abstracted to any platform."
            >
            <TokensSection>

                {tokenList.map(tokenGroup => (
                    <TokenGroup id={tokenGroup.id} key={uuidv4()}>
                        <Subtitle>{tokenGroup.name}</Subtitle>
                        <List>
                            {tokenGroup.values.map(item => (
                                <ListItem 
                                    key={uuidv4()} 
                                    leading={(
                                        <Body>{item.name}</Body>
                                    )}
                                    trailing={(
                                        <Caption>{item.value}</Caption>
                                    )}
                                />
                            ))}
                        </List>
                    </TokenGroup>
                ))}

            </TokensSection>
        </DocTemplate>
    )
}


export default Tokens