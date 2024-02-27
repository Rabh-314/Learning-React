import { useState } from "react";
import CalculatorButtons from "./CalculatorButton";
import DisplayBox from "./DisplayBox";
import style from './container.module.css';

export default function Calculator() {

    let [Todisplay, setTodisplay] = useState("");
    const handleOnClick = (button_val) => {

        if (button_val === 'Del') {
            setTodisplay("");

        } else if (button_val === 'Back') {
            
            setTodisplay(Todisplay.slice(0, -1))

        } else if (button_val === 'Ans') {
            // eslint-disable-next-line
            setTodisplay(eval(Todisplay)+'');
        }
        else {
            setTodisplay(Todisplay + button_val);
        }
    }
    return (

        <div className={style.container}>
            <DisplayBox display={Todisplay} />
            <CalculatorButtons handleClick={handleOnClick} />
        </div>

    )
}