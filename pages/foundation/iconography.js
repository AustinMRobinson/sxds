import styled from '@emotion/styled'

import { v4 as uuidv4 } from 'uuid';

import DocTemplate from '../../layouts/docTemplate'
import Card from '../../components/card'
import Icon, { SmallIcon } from '../../components/icon'
import { Subtitle } from '../../components/typography'



const IconographySection = styled.section`
    .system {
        margin-bottom: 2.5rem;
    }
    .system, .small {
        ${Subtitle} {
            margin-bottom: 1rem;
        }
        .icon-row {
            > svg {
                margin: 1rem;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .system {
            margin-bottom: 1.75rem;
        }
        .system, .small {
            ${Subtitle} {
                margin-bottom: 0.5rem;
            }
            .icon-row {
                > svg {
                    margin: 0.75rem;
                }
            }
        }
    }
`

const Iconography = () => {

    const systemIcons = [
        'menu',
        'sun',
        'x',
        'chevronDown',
        'chevronUp',
        'chevronLeft',
        'chevronRight',
        'calendar',
        'document',
        'search',
    ]

    const smallIcons = [
        'x',
        'chevronDown',
        'chevronUp',
        'chevronLeft',
        'chevronRight',
        'check'
    ]

    return (
        <DocTemplate
            title="Iconography"
            description="The iconography used in the SpaceX design system. There are two styles: system and small."
            currentURL="/foundation/iconography"
            >
            <IconographySection id="iconography">
                <div className="system">
                    <Subtitle>System icons</Subtitle>
                    <Card>
                        <div className="icon-row">
                            {systemIcons.map(icon => (
                                <Icon icon={icon} key={uuidv4()} />
                            ))}
                        </div>
                    </Card>
                </div>
                <div className="small">
                    <Subtitle>Small icons</Subtitle>
                    <Card>
                        <div className="icon-row">
                            {smallIcons.map(icon => (
                                <SmallIcon icon={icon} key={uuidv4()} />
                            ))}
                        </div>
                    </Card>
                </div>
            </IconographySection>
        </DocTemplate>
    )
}

export default Iconography