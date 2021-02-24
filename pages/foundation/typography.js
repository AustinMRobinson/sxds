import styled from '@emotion/styled'

import { v4 as uuidv4 } from 'uuid';

import DocTemplate from '../../layouts/docTemplate'
import { List, ListItem } from '../../components/list'
import { TitleXL, TitleLg, TitleMd, TitleSm, SubtitleLg, Subtitle, BodyLg, Body, Label, LabelSm, Caption, CaptionSm } from '../../components/typography'


const TypographySection = styled.section`
    > ul {
        > li {
            .leading {
                ${TitleXL} {
                    font-size: 7rem;
                    @media screen and (max-width: 1200px) {
                        font-size: 5.5rem;
                    }
                    @media screen and (max-width: 996px) {
                        font-size: 4.5rem;
                    }
                }
                ${TitleLg} {
                    font-size: 5.5rem;
                    @media screen and (max-width: 1200px) {
                        font-size: 4.5rem;
                    }
                    @media screen and (max-width: 996px) {
                        font-size: 3.5rem;
                    }
                }
            }
        }
    }
`

const SizeGroup = styled.div`
    display: flex;
    > div {
        display: none;
        &:first-of-type {
            display: block;
        }
        @media screen and (max-width: 1200px) {
            &:first-of-type {
                display: none;
            }
            &:nth-of-type(2) {
                display: block;
            }
        }
        @media screen and (max-width: 996px) {
            &:nth-of-type(2) {
                display: none;
            }
            &:nth-of-type(3) {
                display: block;
            }
        }
    }
`

const Typography = () => {

    const typeStyles = [
        {
            name: 'TitleXL',
            tag: <TitleXL>Title XL</TitleXL>,
            sizes: [
                '7rem',
                '5.5rem',
                '4.5rem'
            ]
        },
        {
            name: 'TitleLg',
            tag: <TitleLg>Title Lg</TitleLg>,
            sizes: [
                '5.5rem',
                '4.5rem',
                '3.5rem'
            ]
        },
        {
            name: 'TitleMd',
            tag: <TitleMd>Title Md</TitleMd>,
            sizes: [
                '4.5rem',
                '3.5rem',
                '2.5rem'
            ]
        },
        {
            name: 'TitleSm',
            tag: <TitleSm>Title Sm</TitleSm>,
            sizes: [
                '3.5rem',
                '2.5rem',
                '1.75rem'
            ]
        },
        {
            name: 'SubtitleLg',
            tag: <SubtitleLg>Subtitle Lg</SubtitleLg>,
            sizes: [
                '2.5rem',
                '1.75rem',
                '1.25rem'
            ]
        },
        {
            name: 'Subtitle',
            tag: <Subtitle>Subtitle</Subtitle>,
            sizes: [
                '1.75rem',
                '1.25rem',
                '1rem'
            ]
        },
        {
            name: 'BodyLg',
            tag: <BodyLg>Body Lg</BodyLg>,
            sizes: [
                '1.25rem',
                '1.25rem',
                '1rem'
            ]
        },
        {
            name: 'Body',
            tag: <Body>Body</Body>,
            size: '1rem',
        },
        {
            name: 'Label',
            tag: <Label>Label</Label>,
            size: '0.875rem',
        },
        {
            name: 'LabelSm',
            tag: <LabelSm>Label Sm</LabelSm>,
            size: '0.75rem',
        },
        {
            name: 'Caption',
            tag: <Caption>Caption</Caption>,
            size: '0.875rem',
        },
        {
            name: 'CaptionSm',
            tag: <CaptionSm>Caption Sm</CaptionSm>,
            size: '0.75rem',
        },
    ]

    return (
        <DocTemplate
            title="Typography"
            description="The web typography styles used in the SpaceX design system. The styles here are responsive by default, with 3 different sizes spanning the responsive breakpoints."
            >
            <TypographySection id="typopgraphy">
                <List>
                    {typeStyles.map(typeStyle => (
                        <ListItem
                            key={uuidv4()}
                            leading={(
                                <div>
                                    {typeStyle.tag}
                                </div>
                            )}
                            trailing={(
                                <div>
                                    {typeStyle.sizes 
                                        ? <SizeGroup>
                                            {typeStyle.sizes.map(size => (
                                                <div key={uuidv4()}>{size}</div>
                                            ))}
                                          </SizeGroup>
                                        : <div>{typeStyle.size}</div>
                                    }
                                </div>
                            )}
                        />
                    ))}
                </List>
            </TypographySection>
        </DocTemplate>
    )
}

export default Typography