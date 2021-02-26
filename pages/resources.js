import Image from 'next/image'
import styled from '@emotion/styled'

import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import Layout from '../layouts'

import Card from '../components/card'
import Button from '../components/button'
import { TitleMd, SubtitleLg, BodyLg, Body } from '../components/typography'


const ResourceSection = styled.section`
    .top {
        text-align: center;
        .top-row {
            margin-bottom: 3.5rem;
            ${TitleMd} {
                margin-bottom: 0.5rem;
            }
            ${BodyLg} {
                color: var(--lightForeground);
            }
        }
    }
    .grid {
        .resource-col {
            margin-bottom: 2rem;
            &:nth-of-type(5), &:nth-of-type(6) {
                .card-wrapper {
                    .image-wrapper {
                        img {
                            object-position: top center;
                        }
                    }
                }
            }
        }
        .card-wrapper {
            height: 100%;
            .image-wrapper {
                min-height: 14rem;
                position: relative;
                img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: left top;
                }
            }
            .bottom {
                margin-top: 1.5rem;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                .title-subtitle {
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                    ${SubtitleLg} {
                        margin-bottom: 0.25rem;
                    }
                    ${Body} {
                        color: var(--lightForeground);
                    }
                }
                button {
                    align-self: flex-start;
                    min-width: 7rem;
                }
            }
        }
    }
    @media screen and (max-width: 996px) {
        .top {
            .top-row {
                margin-bottom: 3rem;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .top {
            .top-row {
                margin-bottom: 2rem;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .top {
            .top-row {
                margin-bottom: 1.25rem;
            }
        }
        .grid {
            .resource-col {
                margin-bottom: 1.25rem;
            }
            .card-wrapper {
                .image-wrapper {
                    min-height: 12rem;
                }
                .bottom {
                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
`

const Resources = () => {

    const resources = [
        {
            image: '/images/resources/resources-spacexdotcom.jpg',
            imageAlt: 'A screenshot from Figma showing a mockup across 3 breakpoints.',
            title: 'SpaceX.com Mockup',
            subtitle: 'A demo of the SpaceX design system where it is applied to the Falcon 9 page on SpaceX.com.',
            link: 'https://www.figma.com/file/0kKbQ7gC1GaQgVYozjg4y7/SpaceX.com?node-id=0%3A1',
        },
        {
            image: '/images/resources/resources-colors.jpg',
            imageAlt: 'A screenshot from Figma showing the system colors in each mode.',
            title: 'SXDS System Colors',
            subtitle: 'The system colors for the SpaceX design system in Figma, available as a library.',
            link: 'https://www.figma.com/file/kjL7RXnmA59VWioWGId1Hl/Colors?node-id=0%3A1',
        },
        {
            image: '/images/resources/resources-iconography.jpg',
            imageAlt: 'A screenshot from Figma showing the icons in both styles.',
            title: 'SXDS Iconography',
            subtitle: 'The iconography for the SpaceX design system in Figma, available as a library.',
            link: 'https://www.figma.com/file/W8EDFNHfke2oZu9zhee2Mq/Iconography?node-id=0%3A1',
        },
        {
            image: '/images/resources/resources-typography.jpg',
            imageAlt: 'A screenshot from Figma showing the SXDS typography sizes.',
            title: 'SXDS Web Typography',
            subtitle: 'The web responsive typography scales for the SpaceX design system in Figma, part of the SXDS Web library.',
            link: 'https://www.figma.com/file/jETLnpemhTsj4oqGnbKbDk/Web?node-id=1%3A92',
        },
        {
            image: '/images/resources/resources-components.jpg',
            imageAlt: 'The SXDS components in the 3 modes: dark, light, and void.',
            title: 'SXDS Web Components',
            subtitle: 'The web components for the SpaceX design system in Figma, available as a library.',
            link: 'https://www.figma.com/file/jETLnpemhTsj4oqGnbKbDk/Web?node-id=41%3A2282',
        },
        {
            image: '/images/resources/resources-layoutgrid.jpg',
            imageAlt: 'The XL layout grid in web.',
            title: 'SXDS Web Layout Grid',
            subtitle: 'The iconography for the SpaceX design system in Figma, available as a library.',
            link: 'https://www.figma.com/file/jETLnpemhTsj4oqGnbKbDk/Web?node-id=37%3A2235',
        },
        {
            image: '/images/resources/resources-deck.jpg',
            imageAlt: 'A screenshot from a presentation deck with the text "What is a design system?".',
            title: 'Presentation Deck',
            subtitle: 'The presentation deck for the SpaceX design system to show people some information about the system.',
            link: 'https://www.figma.com/proto/HbCeOymAFEhYtSfneR9Ied/Deck?node-id=1%3A76&viewport=301%2C307%2C0.05184633284807205&scaling=contain',
        },
    ]

    return (
        <div>
            <Layout title="Resources" description="Resources for the SpaceX design system including Figma assets, presentations, and more." currentURL="resources">
                <ResourceSection>
                    <div className="top">
                        <Row className="top-row">
                            <Col>
                                <TitleMd as="h1">Resources</TitleMd>
                                <BodyLg>
                                    A collection of resources for the design system, primarily Figma design libraries.
                                </BodyLg>
                            </Col>
                        </Row>
                    </div>
                    <div className="grid">
                        <Row>
                            {resources.map(resource => (
                                <Col key={uuidv4()} xs={12} md={6} lg={4} xl={3} className="resource-col">
                                    <div className="card-wrapper">
                                        <Card p="2">
                                            <div className="image-wrapper">
                                                <Image layout="fill" src={resource.image} alt={resource.imageAlt}/>
                                            </div>
                                            <div className="bottom">
                                                <div className="title-subtitle">
                                                    <SubtitleLg as="h2">{resource.title}</SubtitleLg>
                                                    <Body>{resource.subtitle}</Body>
                                                </div>
                                                <a tabIndex="-1" href={resource.link} target="_blank"><Button variant="secondary">Visit</Button></a>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </ResourceSection>
            </Layout>
        </div>
    )
}

export default Resources
