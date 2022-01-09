import * as C from './style'
import {Item}  from '../../Types/item'
import {formatDate} from '../../HELPERS/dateFilter'
import { categories} from '../../data/categorys'

type Props = {
    item:Item
}

export const TableItem = ({item}:Props) =>{

    return(
        <C.TableLine>
            <C.TableColumn response={true}>{formatDate(item.date)}</C.TableColumn>

            <C.TableColumn response={true}>

                <C.Category  color={categories[item.category].color}>
                {categories[item.category].title}
                </C.Category>

            </C.TableColumn>

            <C.TableColumn>{item.title}</C.TableColumn>

            <C.TableColumn>

                <C.Value color={categories[item.category].expense? 'red':'green'}>
                R$ {item.value}
                </C.Value>

            </C.TableColumn>

        </C.TableLine>
    )
}