
import * as C from './Styles'
import {Item}  from '../../Types/item'
import {TableItem} from '../TableItem'

type Props ={
    list:Item[]
}

export const TableArea = ({list}:Props) =>{

    return (
        <C.Table>
        
            <thead> 
                <tr>
                
                   <C.TableHeadColumn response={true} width={130} >Data</C.TableHeadColumn>
                    <C.TableHeadColumn response={true} width={150} >Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn width={200}>Titulo</C.TableHeadColumn>
                    <C.TableHeadColumn  width={130}>Valor</C.TableHeadColumn>

                </tr>

            </thead>

            <tbody>
                {list.map((i,k)=>(
                   <TableItem item={i} key={k}/>
                ))}

            </tbody>

        </C.Table>
    )
}