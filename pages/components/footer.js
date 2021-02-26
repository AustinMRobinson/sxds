import Image from 'next/image'

import ComponentDocTemplate from '../../layouts/componentDocTemplate'


const FooterPage = () => {

    return (
        <ComponentDocTemplate
            title="Footer"
            description="Footer is the last form of navigation that a user will see on a screen, often it duplicates info from other navigation items."
            currentURL="/components/modal"
            component={(
                <Image src="/images/components/footer/footer.svg" alt="A screenshot of the footer component because I wasn't able to code it in time" width="800" height="156" />
            )}
            />
           
    )
}

export default FooterPage