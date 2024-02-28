import { useState } from 'react';
import css from '../calculator/DisplayBox.module.css'

function Header({onAdd}){

    let [task,setTask] = useState("");
    const addTask = (Event)=>{
        setTask(Event.target.value);
        // console.log(Event.target.value);
    };

    let [date,setDate] = useState("");
    const addDate = (Event)=>{
        setDate(Event.target.value);
        // console.log(Event.target.value);
    }

    const addData = ()=>{
        if (task==="" || date===""){
            alert("enter value");
        }else{
            onAdd(task,date);
            setTask("");
            setDate("");
        }
        
    }

    return(
        <div className={css.Div1}>

            <input type="text" 
                className={css.inputBoxToDo} 
                value={task}
                onChange={addTask}/>
                
            <input type="date" 
                className={css.inputBoxToDo}
                value={date}
                onChange={addDate}/>
                
            <button 
                className={css.submitBoxToDo}
                onClick={addData}>Add</button>

        </div>
        
    );

}


export default Header;