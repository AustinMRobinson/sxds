import styled from '@emotion/styled'
import "@reach/tabs/styles.css";

import { v4 as uuidv4 } from 'uuid';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { LabelStyle } from '../components/typography'


const StyledTabs = styled(Tabs)`
    display: flex;
    flex-direction: column;
    .tab-wrapper {
        box-shadow: inset 0 -1px 0px var(--lightestBackground);
        margin-bottom: 1.5rem;
        [data-reach-tab-list] {
            display: flex;
            background: transparent;
            [data-reach-tab] {
                ${LabelStyle}
                color: var(--mediumForeground);
                padding: 1.25rem 0;
                transition: color var(--transition1), border-color var(--transition1);
                &:not(:last-of-type) {
                    margin-right: 1.5rem;
                }
                &:hover {
                    border-bottom-color: var(--lightForeground);
                }
                [data-selected], &:active {
                    color: var(--foreground);
                    border-bottom-color: var(--lightForeground);
                }
                &:focus {
                    outline: none;
                    color: var(--lightForeground);
                    border-bottom-color: var(--mediumForeground);
                }
            }
            [data-reach-tab][data-selected] {
                color: var(--foreground);
                border-bottom-color: var(--lightForeground);
                &:focus {
                    outline: none;
                    border-bottom-color: var(--mediumForeground);
                }
            }
        }
    }
`

const TabGroup = ({ tabItems, children }) => {
    return (
        <StyledTabs>
            <div className="tab-wrapper">
                <TabList>
                    {tabItems.map(tab => (
                        <Tab key={uuidv4()}>{tab.label}</Tab>
                    ))}
                </TabList>
            </div>
            <div className="tab-content-wrapper">
                <TabPanels>
                    { children }
                </TabPanels>
            </div>
        </StyledTabs>
    )
}

export default TabGroup