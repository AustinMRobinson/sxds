import ComponentDocTemplate from '../../layouts/componentDocTemplate'
import SideMenu from '../../components/sideMenu'


const SideMenuPage = () => {

    const sideMenuItems = [
        {
            href: 'side-menu',
            label: 'Side menu item',
        },
        {
            href: '#',
            label: 'Side menu item',
        },
        {
            href: '#',
            label: 'Side menu item',
        },
        {
            href: '#',
            label: 'Side menu item',
        },
    ]

    return (
        <ComponentDocTemplate
            title="Side Menu"
            description="A side menu is a secondary form of navigation that is used alongside a Header in SXDS. It is only visible on large breakpoints."
            currentURL="/components/side-menu"
            component={(
                <SideMenu position="static" sideMenuItems={sideMenuItems} />
            )}
            />
           
    )
}

export default SideMenuPage