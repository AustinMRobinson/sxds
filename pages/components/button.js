import Image from 'next/image';
import styled from '@emotion/styled'

import { TabPanel } from '@reach/tabs'
import { Row, Col } from 'react-bootstrap';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import { v4 as uuidv4 } from 'uuid';

import ComponentDocTemplate from '../../layouts/componentDocTemplate'
import Button from '../../components/button'
import { Body, SubtitleLg, Subtitle, Caption } from '../../components/typography'
import { SmallIcon } from '../../components/icon';


const Content = styled.div`
    padding: 3.25rem 0;
    .design, .development {
        > .row {
            margin-bottom: 1.5rem;
        }
    }
    @media screen and (max-width: 996px) {
        padding: 2rem 0;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem 0;
    }
`

const StyledSection = styled.div`
    padding: 3.5rem 0 2.5rem 0;
    &:not(:last-of-type) {
        border-bottom: 1px solid var(--lightestBackground);
    }
    .title-subtitle {
        margin-bottom: 2rem;
        ${Subtitle} {
            margin-bottom: 0.5rem;
        }
        ${Body} {
            color: var(--lightForeground);
        }
    }
    @media screen and (max-width: 996px) {
        padding: 2rem 0 1.5rem 0;
        .title-subtitle {
            margin-bottom: 1.5rem;
        }
    }
    @media screen and (max-width: 768px) {
        padding: 2rem 0 1rem 0;
        .title-subtitle {
            margin-bottom: 1rem;
        }
    }
`

const Section = ({ title, description, children }) => {
    return (
        <StyledSection>
            <Row>
                <Col xs={12}>
                    <div className="title-subtitle">
                        <Subtitle>{title}</Subtitle>
                        {description && (
                            <Body>{description}</Body>
                        )}
                    </div>
                </Col>
                {children}
            </Row>
        </StyledSection>
    )
}

const StyledExample = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.75rem;
    .example-wrapper {
        position: relative;
        z-index: 0;
        background: var(--mediumBackground);
        border-top: 1px solid var(--lightestBackground);
        min-height: 17.5rem;
        img {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: -2px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .icon-wrapper {
            position: absolute;
            z-index: 2;
            width: 1.75rem;
            height: 1.75rem;
            top: 0.75rem;
            right: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: var(--foregroundInverse);
            background: ${props => props.type === 'positive' ? 'var(--positive)' : 'var(--negative)'};
        }
        .positive, .negative, .overlap {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.25rem;
            z-index: 1;
        }
        .positive {
            background: var(--positive);
        }
        .negative {
            background: var(--negative);
        }
        .overlap {
            z-index: 0;
            height: 0.125rem;
            background: #0D0D0D;
        }
        &:before, &:after {
            content: '';
            position: absolute;
            top: 0;
            z-index: 2;
            bottom: 1rem;
            width: 1px;
            background: linear-gradient(180deg, var(--lightestBackground) 0%, transparent 100%);
        }
        &:before {
            left: 0;
        }
        &:after {
            right: 0;
        }
    }
    ${Caption} {
        margin-top: 0.75rem;
        color: var(--lightForeground);
    }
    @media screen and (max-width: 576px) {
        .example-wrapper {
            min-height: 14rem;
        }
        ${Caption} {
            margin-top: 0.5rem;
        }
    }
`

const Example = ({ image, caption, type }) => {
    return (
        <Col xs={12} sm={6} lg={12} xl={6}>
            <StyledExample type={type}>
                <div className="example-wrapper">
                    <>
                        {type === 'positive' && (
                            <div className="icon-wrapper"><SmallIcon icon="check" /></div>
                        )}
                        {type === 'negative' && (
                            <div className="icon-wrapper"><SmallIcon icon="x" /></div>
                        )}
                    </>
                    <Image src={image} alt={caption} layout="fill"/>
                    <>
                        {type === 'positive' && (
                            <span className="positive" />
                        )}
                        {type === 'negative' && (
                            <span className="negative" />
                        )}
                        <span className="overlap" />
                    </>
                </div>
                {caption && (
                    <Caption>{caption}</Caption>
                )}
            </StyledExample>
        </Col>
    )
}

const StyledDemo = styled.div`
    margin: 1rem 0;
    .preview {
        background: var(--mediumBackground);
        padding: 2.5rem;
        border-bottom: 1px solid var(--lightestBackground);
        min-height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .editor {
        padding: 1.5rem;
        background: #0d0d0d;
    }
    @media screen and (max-width: 768px) {
        .editor {
            padding: 1rem;
        }
    }
`


const ButtonPage = () => {

    const tabs = [
        {
            label: 'How to Use',
        },
        {
            label: 'Design',
        },
        {
            label: 'Development',
        },
    ]

    const content = {
        sections: [
            {
                title: 'Hierarchy',
                description: 'Buttons have two appearance styles that are meant to be used based on the hierarchy they need to occupy in a given experience.',
                examples: [
                    {
                        type: '',
                        image: 'button-hierarchy-1.jpg',
                        caption: 'The two button styles: Primary and Secondary.',
                    },
                    {
                        type: '',
                        image: 'button-hierarchy-2.jpg',
                        caption: 'A hierarchy pyramid representing the hierarchy of each of the two button styles.',
                    },
                    {
                        type: 'positive',
                        image: 'button-hierarchy-3.jpg',
                        caption: 'These two button styles pair nicely together to represent a primary and secondary action.',
                    },
                    {
                        type: 'negative',
                        image: 'button-hierarchy-4.jpg',
                        caption: 'Placing two of the same styles side by side results in a poor user experience, because both actions have the same emphasis.',
                    },
                ]
            },
            {
                title: 'Button groups',
                description: 'In order to meet accessibility standards, it is important to maintain a minimum distance of 8px/0.5rem (vertical or horizontal) between the touchpoints.',
                examples: [
                    {
                        type: 'positive',
                        image: 'button-groups-1.jpg',
                        caption: 'Two buttons with at least 8px/0.5rem of space between them.',
                    },
                    {
                        type: 'negative',
                        image: 'button-groups-2.jpg',
                        caption: 'Two buttons with spacing that is too tight.',
                    },
                ]
            },
            {
                title: 'Content',
                description: 'In order for buttons to be most effective, shorter button strings should be used. This means that the strings should be tied 1:1 to the actions that they perform.',
                examples: [
                    {
                        type: 'positive',
                        image: 'button-content-1.jpg',
                        caption: 'Buttons with reasonable label length despite needing to communicate complicated actions.',
                    },
                    {
                        type: 'negative',
                        image: 'button-content-2.jpg',
                        caption: 'Very long label lengths on these buttons that could be simplified and retain their meaning.',
                    },
                ]
            },
            {
                title: 'Meaningful icons',
                description: 'Buttons can use icons as part of their content. Icons within buttons should be meaningful in that they are tied with the button label. Both items should represent the action that the button performs.',
                examples: [
                    {
                        type: 'positive',
                        image: 'button-icons-1.jpg',
                        caption: 'Using a calendar icon to represent a button that opens a booking flow including a date picker is a great use case.',
                    },
                    {
                        type: 'negative',
                        image: 'button-icons-2.jpg',
                        caption: 'Vague icons like this document icon don’t add anything to this button’s meaning, so it would be better without an icon.',
                    },
                ]
            },
        ]
    }

    const codeDemos = [
        {
            variant: 'Primary',
            code: `<Button variant="primary">Primary Button</Button>`,
            scope: { Button },
        },
        {
            variant: 'Secondary',
            code: `<Button variant="secondary">Secondary Button</Button>`,
            scope: { Button },
        },
        {
            variant: 'Tertiary',
            code: `<Button variant="tertiary">Tertiary Button</Button>`,
            scope: { Button },
        },
    ]

    return (
        <ComponentDocTemplate
            title="Button"
            description="Buttons are used to perform an action. The action to be performed is indicated by the button’s label and/or it’s icon."
            currentURL="/components/button"
            tabs={tabs}
            component={(<Button variant="primary">Button Label</Button>)}
            >

            <Content>
                <TabPanel className="how-to-use">
                    <Row>
                        <Col xs={12}>
                            <SubtitleLg as="h2">How to use</SubtitleLg>
                        </Col>
                    </Row>

                    {content.sections.map(section => (
                        <Section key={uuidv4()} title={section.title} description={section.description}>
                            {section.examples.map(example => (
                                <Example key={uuidv4()} type={example.type} caption={example.caption} image={`/images/components/button/${example.image}`} />
                            ))}
                        </Section>
                    ))}
                </TabPanel>

                <TabPanel className="design">
                    <Row>
                        <Col xs={12}>
                            <SubtitleLg as="h2">Figma component</SubtitleLg>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <a href="https://www.figma.com/file/jETLnpemhTsj4oqGnbKbDk/Web?node-id=1%3A202"><Button variant="primary">View in Figma</Button></a>
                        </Col>
                    </Row>
                </TabPanel>

                <TabPanel className="development">
                    <Row>
                        <Col xs={12}>
                            <SubtitleLg as="h2">Component demos</SubtitleLg>
                        </Col>
                    </Row>

                    {codeDemos.map(demo => (
                        <Row key={uuidv4()}>
                            <Col xs={12}>
                                <Subtitle>{demo.variant}</Subtitle>
                            </Col>
                            <Col xs={12}>
                                <StyledDemo>
                                    <LiveProvider code={demo.code} scope={demo.scope}>
                                        <div className="preview">
                                            <LivePreview />
                                        </div>
                                        <div className="editor">
                                        	<LiveEditor />
                                        </div>
                                        <LiveError />
                                    </LiveProvider>
                                </StyledDemo>
                            </Col>
                        </Row>
                    ))}
                </TabPanel>

            </Content>

        </ComponentDocTemplate>
    )
}

export default ButtonPage