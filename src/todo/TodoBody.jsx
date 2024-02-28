import css from './TodoBody.module.css'

function TodoBody({toDoList,onDel}){


    return(
        <ul className={css.ulItem}>

            {toDoList.map(i=>
                
                <li className={css.liItem} key={`${i.name}+${i.duedate}`}>
                    
                    <div className={css.liDiv}> {i.name} </div> 
                    <div className={css.liDiv}> {i.duedate} </div>
                    <div className={css.liDiv}>
                        <button className={css.buttonItem} onClick={()=>onDel(i.name)}>
                            Remove
                        </button>
                    </div>
                </li>
            
            )}

        </ul>
    );
}

export default TodoBody;