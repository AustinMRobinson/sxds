import Image from 'next/image'

import ComponentDocTemplate from '../../layouts/componentDocTemplate'


const ModalPage = () => {

    return (
        <ComponentDocTemplate
            title="Modal"
            description="Modals are popups that can be used to provide information, request a confirmation, or walk a user through a focused flow."
            currentURL="/components/modal"
            component={(
                <Image src="/images/components/modal/modal.svg" alt="A screenshot of the modal component because I wasn't able to code it in time" width="560" height="410" />
            )}
            />
           
    )
}

export default ModalPage