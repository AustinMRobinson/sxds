import Image from 'next/image'
import styled from '@emotion/styled'
// import { MDXProvider } from '@mdx-js/react'

import { Container, Row, Col } from 'react-bootstrap';

import Layout from '.'
import { TitleMd, SubtitleLg, Subtitle, BodyLg, Body, Caption } from '../components/typography'


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

// const components = {
//     img: Image,
//     h1: SubtitleLg,
//     h2: Subtitle,
//     p: Body,
// }

const DocTemplate = ({ title, description, children, currentURL }) => {

    const sideMenuItems = [
        {
            href: 'colors',
            label: 'Colors',
        },
        {
            href: 'typography',
            label: 'Typography',
        },
        {
            href: 'iconography',
            label: 'Iconography',
        },
        {
            href: 'design-tokens',
            label: 'Design Tokens',
        },
    ]

    return (
        <Layout title={title} description={description} currentURL={currentURL} sideMenuItems={sideMenuItems}>
            <Container fluid>

                <Row>
                    <Col xs={12} lg={10} xl={8}>
                        <PageIntro>
                            <TitleMd as="h1">{title}</TitleMd>
                            <BodyLg>{description}</BodyLg>
                        </PageIntro>
                    </Col>
                </Row>
    
                <Row>
                    <Col xs={12} lg={10} xl={8}>
                        {children}
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}

export default DocTemplate
