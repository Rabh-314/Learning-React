import css from './CalculatorButton.module.css'

function CalculatorButtons({handleClick}){

    const array = [
        "7","8","9","Back","Del",
        "4","5","6","*","/",
        "1","2","3","+","-",
        "0",".","Ans",
    ]

    return(
        <div className={css.divout}>
            {array.map(i=>
                <button 
                    type="text"
                    key={i}
                    className={css.inputButtons}
                    onClick={()=>{handleClick(i)}}
                >{i}</button>    
            )}
        </div>
    );

}

export default CalculatorButtons;