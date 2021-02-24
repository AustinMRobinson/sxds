import styled from '@emotion/styled'

import { TabPanel } from '@reach/tabs'
import { Row, Col } from 'react-bootstrap';

import ComponentDocTemplate from '../../layouts/componentDocTemplate'
import Button from '../../components/button'
import { Body, SubtitleLg, Subtitle, Caption } from '../../components/typography'
import { SmallIcon } from '../../components/icon';

const Content = styled.div`
    padding: 3.25rem 0;
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
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .icon-wrapper {
            position: absolute;
            width: 1.75rem;
            height: 1.75rem;
            top: 0.75rem;
            right: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: var(--foregroundInverse);
            background: ${props => props.positive === true ? 'var(--positive)' : 'var(--negative)'};
        }
        .positive, .negative {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.25rem;
        }
        .positive {
            background: var(--positive);
        }
        .negative {
            background: var(--negative);
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

const Example = ({ image, caption, positive, negative }) => {
    return (
        <Col xs={12} sm={6} lg={12} xl={6}>
            <StyledExample positive={positive} negative={negative}>
                <div className="example-wrapper">
                    <>
                        {positive && (
                            <div className="icon-wrapper"><SmallIcon icon="check" /></div>
                        )}
                        {negative && (
                            <div className="icon-wrapper"><SmallIcon icon="x" /></div>
                        )}
                    </>
                    <img src={image} alt={caption}/>
                    <>
                        {positive && (
                            <span className="positive" />
                        )}
                        {negative && (
                            <span className="negative" />
                        )}
                    </>
                </div>
                {caption && (
                    <Caption>{caption}</Caption>
                )}
            </StyledExample>
        </Col>
    )
}



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

    return (
        <ComponentDocTemplate
            title="Button"
            description="Buttons are used to perform an action. The action to be performed is indicated by the button’s label and/or it’s icon."
            tabs={tabs}
            component={(<Button variant="primary">Button Label</Button>)}
            >

            <Content>
                <TabPanel>
                    <Row className="no-gutters">
                        <Col xs={12}>
                            <SubtitleLg as="h2">How to use</SubtitleLg>
                        </Col>
                    </Row>

                    <Section title="Hierarchy" description="Buttons have two appearance styles that are meant to be used based on the hierarchy they need to occupy in a given experience.">
                        <Example caption="The two button styles: Primary and Secondary." />
                        <Example caption="A hierarchy pyramid representing the hierarchy of each of the two button styles." />
                        <Example positive caption="These two button styles pair nicely together to represent a primary and secondary action." />
                        <Example negative caption="Placing two of the same styles side by side results in a poor user experience, because both actions have the same emphasis." />
                    </Section>

                    <Section title="Button groups" description="In order to meet accessibility standards, it is important to maintain a minimum distance of 8px/0.5rem (vertical or horizontal) between the touchpoints.">
                        <Example positive caption="Two buttons with at least 8px/0.5rem of space between them." />
                        <Example negative caption="Two buttons with spacing that is too tight." />
                    </Section>

                    <Section title="Content" description="In order for buttons to be most effective, shorter button strings should be used. This means that the strings should be tied 1:1 to the actions that they perform.">
                        <Example positive caption="Buttons with reasonable label length despite needing to communicate complicated actions." />
                        <Example negative caption="Very long label lengths on these buttons that could be simplified and retain their meaning." />
                    </Section>

                    <Section title="Meaningful icons" description="Buttons can use icons as part of their content. Icons within buttons should be meaningful in that they are tied with the button label. Both items should represent the action that the button performs.">
                        <Example positive caption="Using a calendar icon to represent a button that opens a booking flow including a date picker is a great use case." />
                        <Example negative caption="Vague icons like this document icon don’t add anything to this button’s meaning, so it would be better without an icon." />
                    </Section>

                </TabPanel>
            </Content>

        </ComponentDocTemplate>
    )
}

export default ButtonPage