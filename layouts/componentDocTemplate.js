import Image from 'next/image'
import styled from '@emotion/styled'

import { Container, Row, Col } from 'react-bootstrap';

import Layout from '.'
import Card from '../components/card'
import TabGroup from '../components/tabs'
import { TitleMd, SubtitleLg, Subtitle, BodyLg, Body, Caption } from '../components/typography'


const Top = styled.div`
    > .row {
        &:nth-of-type(2) {
            margin-bottom: 2.5rem;
        }
    }
`

const PageIntro = styled.div`
    margin-bottom: 2.5rem;
    ${TitleMd} {
        margin-bottom: 0.5rem;
    }
    ${BodyLg} {
        color: var(--lightForeground);
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 1.5rem;
    }
`

const CardWrapper = styled.div`
    .card-wrapper {
        align-items: center;
        justify-content: center;
        min-height: 22.5rem;
    }
    @media screen and (max-width: 768px) {
        .card-wrapper {
            min-height: 16rem;
        }
    }
`


const ComponentDocTemplate = ({ title, description, children, component, tabs }) => {

    const sideMenuItems = [
        {
            href: 'button',
            label: 'Button',
        },
        {
            href: '#',
            label: 'Header',
        },
        {
            href: '#',
            label: 'Footer',
        },
        {
            href: '#',
            label: 'List',
        },
        {
            href: '#',
            label: 'Modal',
        },
        {
            href: '#',
            label: 'Header',
        },
        {
            href: '#',
            label: 'Pagination',
        },
        {
            href: '#',
            label: 'Select',
        },
        {
            href: '#',
            label: 'Side Menu',
        },
        {
            href: '#',
            label: 'Tabs',
        },
        {
            href: '#',
            label: 'Text Field',
        },
    ]

    return (
        <Layout title={title} description={description} sideMenuItems={sideMenuItems}>
            <Container fluid>

                <Top>
                    <Row>
                        <Col xs={12} lg={10} xl={8}>
                            <PageIntro>
                                <TitleMd as="h1">{title}</TitleMd>
                                <BodyLg>{description}</BodyLg>
                            </PageIntro>
                        </Col>
                    </Row>
    
                    <Row>
                        <Col xs={12} xl={10}>
                            <CardWrapper>
                                <Card>{component}</Card>
                            </CardWrapper>
                        </Col>
                    </Row>
                </Top>
    
                <Row>
                    <Col xs={12} lg={10} xl={8}>
                        <TabGroup tabItems={tabs}>
                            {children}
                        </TabGroup>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

export default ComponentDocTemplate
