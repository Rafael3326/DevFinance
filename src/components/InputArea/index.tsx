
import * as C from './styles'
import {Item} from '../../Types/item'

type Props = {
    onAdd:(item:Item)=> void

}
export const InputArea = ({onAdd}:Props) =>{

    const handleAddEvent = () =>{

        let NewItem :Item={

            date: new Date(2021, 9, 10),
            category:'food',
            title:'Item de teste',
            value:250
        }
        onAdd(NewItem)

    }

 return(
     <C.Container>
         <button onClick={handleAddEvent} >Adicionar</button>
     </C.Container>
 )

}