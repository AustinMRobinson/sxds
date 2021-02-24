import styled from '@emotion/styled'

import { TabPanel } from '@reach/tabs'

import { v4 as uuidv4 } from 'uuid';

import DocTemplate from '../../layouts/docTemplate'
import { List, ListItem } from '../../components/list'
import TabGroup from '../../components/tabs'
import { Body, Caption } from '../../components/typography'


const ModeSection = styled.section`
    > ul {
        > li {
            .trailing {
                ${Caption} {
                    color: var(--mediumForeground);
                }
            }
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

const Colors = () => {

    const tabs = [
        {
            label: 'Dark Mode'
        },
        {
            label: 'Light Mode'
        },
        {
            label: 'Void Mode'
        },
    ]

    const darkModeColors = [
        {
            name: 'Background',
            value: '#000000',
        },
        {
            name: 'Inverse Foreground',
            value: '#000000',
        },
        {
            name: 'Inverse Medium Background',
            value: 'rgba(0,0,0,0.05)',
        },
        {
            name: 'Inverse Light Background',
            value: 'rgba(0,0,0,0.10)',
        },
        {
            name: 'Inverse Lighest Background',
            value: 'rgba(0,0,0,0.20)',
        },
        {
            name: 'Medium Background',
            value: 'rgba(255,255,255,0.05)',
        },
        {
            name: 'Light Background',
            value: 'rgba(255,255,255,0.10)',
        },
        {
            name: 'Lightest Background',
            value: 'rgba(255,255,255,0.20)',
        },
        {
            name: 'Lightest Foreground',
            value: 'rgba(255,255,255,0.40)',
        },
        {
            name: 'Light Foreground',
            value: 'rgba(255,255,255,0.60)',
        },
        {
            name: 'Medium Foreground',
            value: 'rgba(255,255,255,0.80)',
        },
        {
            name: 'Foreground',
            value: '#ffffff',
        },
        {
            name: 'Negative',
            value: '#f25353',
        },
        {
            name: 'Warning',
            value: '#f6954e',
        },
        {
            name: 'Positive',
            value: '#57da7c',
        },
    ]

    const lightModeColors = [
        {
            name: 'Background',
            value: '#ffffff',
        },
        {
            name: 'Inverse Foreground',
            value: '#ffffff',
        },
        {
            name: 'Inverse Medium Background',
            value: 'rgba(255,255,255,0.05)',
        },
        {
            name: 'Inverse Light Background',
            value: 'rgba(255,255,255,0.10)',
        },
        {
            name: 'Inverse Lighest Background',
            value: 'rgba(255,255,255,0.20)',
        },
        {
            name: 'Medium Background',
            value: 'rgba(0,0,0,0.05)',
        },
        {
            name: 'Light Background',
            value: 'rgba(0,0,0,0.10)',
        },
        {
            name: 'Lightest Background',
            value: 'rgba(0,0,0,0.20)',
        },
        {
            name: 'Lightest Foreground',
            value: 'rgba(0,0,0,0.40)',
        },
        {
            name: 'Light Foreground',
            value: 'rgba(0,0,0,0.60)',
        },
        {
            name: 'Medium Foreground',
            value: 'rgba(0,0,0,0.80)',
        },
        {
            name: 'Foreground',
            value: '#000000',
        },
        {
            name: 'Negative',
            value: '#c50d0d',
        },
        {
            name: 'Warning',
            value: '#d96f22',
        },
        {
            name: 'Positive',
            value: '#19ae43',
        },
    ]

    const voidModeColors = [
        {
            name: 'Background',
            value: '#020738',
        },
        {
            name: 'Inverse Foreground',
            value: '#020738',
        },
        {
            name: 'Inverse Medium Background',
            value: 'rgba(2,7,56,0.05)',
        },
        {
            name: 'Inverse Light Background',
            value: 'rgba(2,7,56,0.10)',
        },
        {
            name: 'Inverse Lighest Background',
            value: 'rgba(2,7,56,0.20)',
        },
        {
            name: 'Medium Background',
            value: 'rgba(255,255,255,0.05)',
        },
        {
            name: 'Light Background',
            value: 'rgba(255,255,255,0.10)',
        },
        {
            name: 'Lightest Background',
            value: 'rgba(255,255,255,0.20)',
        },
        {
            name: 'Lightest Foreground',
            value: 'rgba(255,255,255,0.40)',
        },
        {
            name: 'Light Foreground',
            value: 'rgba(255,255,255,0.60)',
        },
        {
            name: 'Medium Foreground',
            value: 'rgba(255,255,255,0.80)',
        },
        {
            name: 'Foreground',
            value: '#ffffff',
        },
        {
            name: 'Negative',
            value: '#f25353',
        },
        {
            name: 'Warning',
            value: '#f6954e',
        },
        {
            name: 'Positive',
            value: '#57da7c',
        },
    ]

    return (
        <DocTemplate
            title="Colors"
            description="The system colors used in the SpaceX design system. These are called system colors because they are abstracted variables that give light, dark, and space mode out of the box."
            >
            <TabGroup tabItems={tabs}>
                <TabPanel>
                    <ModeSection id="dark">
                        <List>
                            {darkModeColors.map(color => (
                                <ListItem 
                                    key={uuidv4()} 
                                    leading={(
                                        <ColorLeading color={color.value}>
                                            <div className="color" />
                                            <Body>{color.name}</Body>
                                        </ColorLeading>
                                    )}
                                    trailing={(
                                        <Caption>{color.value}</Caption>
                                    )}
                                />
                            ))}
                        </List>
                    </ModeSection>
                </TabPanel>
                <TabPanel>
                    <ModeSection id="light">
                        <List>
                            {lightModeColors.map(color => (
                                <ListItem 
                                    key={uuidv4()} 
                                    leading={(
                                        <ColorLeading color={color.value}>
                                            <div className="color" />
                                            <Body>{color.name}</Body>
                                        </ColorLeading>
                                    )}
                                    trailing={(
                                        <Caption>{color.value}</Caption>
                                    )}
                                />
                            ))}
                        </List>
                    </ModeSection>
                </TabPanel>
                <TabPanel>
                    <ModeSection id="void">
                        <List>
                            {voidModeColors.map(color => (
                                <ListItem 
                                    key={uuidv4()} 
                                    leading={(
                                        <ColorLeading color={color.value}>
                                            <div className="color" />
                                            <Body>{color.name}</Body>
                                        </ColorLeading>
                                    )}
                                    trailing={(
                                        <Caption>{color.value}</Caption>
                                    )}
                                />
                            ))}
                        </List>
                    </ModeSection>
                </TabPanel>
            </TabGroup>
        </DocTemplate>
    )
}


export default Colors