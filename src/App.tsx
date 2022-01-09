import React from 'react';
import { useState,useEffect } from 'react';
import * as C from './App.styles'
import { Category } from './Types/Category';
import { Item } from "./Types/item"
import { Items } from './data/items';
import { categories } from './data/categorys';
import { GetCurrentMonth,FilteredListByMonth } from './HELPERS/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

function App() {

  const[list,setList]=useState(Items)
  const[filteredList,setFilteredList]=useState<Item[]>([])
  const[currentMonth,setCurrentMonth]=useState(GetCurrentMonth())
  const[income,setIncome]=useState(0)
  const[expense,setExpense]=useState(0)

  useEffect(()=>{

    setFilteredList(FilteredListByMonth(list,currentMonth))

  },[list,currentMonth])

  const HandleMonthChange= (newMonth: string)=> {
    setCurrentMonth(newMonth)

  }

  useEffect(()=>{
    let incomeCount= 0;
    let expense=0

    for (let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expense+= filteredList[i].value;
      }

      else {
        incomeCount+= filteredList[i].value;    
      }
    }

    setIncome(incomeCount)
    setExpense(expense)
  },[filteredList])


  const handleAddItem = (item:Item) =>{
    let newlist=[...list]
    newlist.push(item)
    setList(newlist)

  }


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>DevFinance</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea  currentMonth={currentMonth} 
        onMonthChange={HandleMonthChange}
        income={income}
        expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList}/>
         <C.InputRes>
           <div>
             Adicionar novo item 
           </div>
         </C.InputRes>
      </C.Body>
    </C.Container>
  )
}

export default App;
