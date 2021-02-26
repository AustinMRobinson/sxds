import ComponentDocTemplate from '../../layouts/componentDocTemplate'
import { List, ListItem } from '../../components/list'


const ListPage = () => {

    return (
        <ComponentDocTemplate
            title="List"
            description="Lists are helpful when needing to display a list of information."
            currentURL="/components/list"
            component={(
                <List minWidth="50%">
                    {[...Array(5)].map((x, i) => 
                        <ListItem key={i} leading={<div>Leading info</div>} trailing={<div>Trailing</div>}/>
                    )}
                </List>
            )}
            />
           
    )
}

export default ListPage