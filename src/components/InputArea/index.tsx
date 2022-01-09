
import * as C from './styles'
import {Item} from '../../Types/item'
import {categories}  from '../../data/categorys'
import  { useState} from 'react'
import { ChangeEvent} from 'react'

type Props = {
    
    onAdd:(item:Item)=> void
    response:boolean
    trocar: () => void

}
export const InputArea = ({onAdd,response,trocar}:Props) =>{

    const[category,setCategory]=useState('')
    const[price,setPrice]=useState<number|string>('')
    const[date,setDate]=useState(new Date())
    const[description,setDescription]=useState<string>('')
    const[err,setErr]=useState<boolean>(false)

    const handleAddEvent = () =>{

        let NewItem :Item={

            date: new Date(),
            category:category,
            title:description,
            value:Number(price)
        }

        if(category!=='' && price !==''){
            onAdd(NewItem)
        }

        trocar()

    }

    const select1 = (e : ChangeEvent<HTMLSelectElement>) =>{
         
        setCategory(e.target.value)
        
        
    }

    const inputPrice = (e: ChangeEvent<HTMLInputElement>) =>{
         let result = Number(e.target.value)
          if(result.toString() === 'NaN'){
            setErr(true)
          } else {
            setErr(false)
            setPrice(e.target.value)
          }
        
          
       
    }
    const inputDescription = (e: ChangeEvent<HTMLInputElement>) =>{
       
        setDescription(e.target.value)
      
       
    }
     
 return(
     <C.Container response={response}>
         <button onClick={handleAddEvent} >Adicionar</button>
         <label> Categoria</label>
         <select onChange={select1}>
             <option></option>
             <option  value='food'>Food</option>
             <option value='rent'>Rent</option>
             <option value='salary'>Salary</option>
         </select>
         <label>Price</label>
         <input className='inputPrice' type='text' value={price} onChange={inputPrice} />
         <label>Descrição</label>
         <input  className='description' type='text' value={description} onChange={inputDescription} />

         
     </C.Container>
 )

}