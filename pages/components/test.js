import DocTemplate from '../../layouts/docTemplate'
import { List, ListItem } from '../../components/list'


const Test = () => {
    return (
        <DocTemplate
            title="Colors"
            description="The system colors used in the SpaceX design system. These are called system colors because they are abstracted variables that give light, dark, and space mode out of the box."
            >
            <List>
                <ListItem leading={(<div>Hey</div>)}/>
            </List>
        </DocTemplate>
    )
}

export default Test