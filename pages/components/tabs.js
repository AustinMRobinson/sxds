import { v4 as uuidv4 } from 'uuid';

import { TabPanel } from '@reach/tabs'

import ComponentDocTemplate from '../../layouts/componentDocTemplate'
import TabGroup from '../../components/tabs'

const TabsPage = () => {

    const tabs = [
        {
            label: 'Tab 1'
        },
        {
            label: 'Tab 2'
        },
        {
            label: 'Tab 3'
        },
    ]

    return (
        <ComponentDocTemplate
            title="Tabs"
            description="A side menu is a secondary form of navigation that is used alongside a Header in SXDS. It is only visible on large breakpoints."
            component={(
                <TabGroup tabItems={tabs}>
                    {tabs.map(tab => (
                        <TabPanel key={uuidv4()}>
                            {tab.label}
                        </TabPanel>
                    ))}
                </TabGroup>
            )}
            />
           
    )
}

export default TabsPage