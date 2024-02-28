import { useState } from 'react';
import style from '../calculator/container.module.css';
import Header from './Header';
import TodoBody from './TodoBody';

function TodoMain(){

    let [toDoList,settoDoList] = useState([])

    const handleAdd = (newItem,newDate)=>{
        settoDoList(
            [...toDoList,{
                'name':newItem,
                'duedate':newDate
            }]
        )
    }


    const handleDelete = (item)=>{
        const newTodolist = toDoList.filter(i=>i.name!==item);
        // console.log(newTodolist);
        settoDoList(newTodolist);
    }

    return(
        <div className={style.container}>
            <Header onAdd = {handleAdd}/>
            <TodoBody toDoList={toDoList} onDel={handleDelete}/>
        </div>
    );
}


export default TodoMain;
