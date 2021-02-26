import ComponentDocTemplate from '../../layouts/componentDocTemplate'
import Header from '../../components/header'


const HeaderPage = () => {

    const navItems = [
        {
            href: '/foundation',
            label: 'Foundation',
        },
        {
            href: '/components',
            label: 'Components',
        },
        {
            href: '#',
            label: 'Examples',
        },
    ]

    return (
        <ComponentDocTemplate
            title="Header"
            description="Headers serve as the primary navigation on any page, even when paired with a side menu."
            currentURL="/components/header"
            component={(
                <Header px={3} position="static" navItems={navItems} />
            )}
            />
           
    )
}

export default HeaderPage