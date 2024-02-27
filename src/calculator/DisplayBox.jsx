import css from './DisplayBox.module.css'

function DisplayBox({display}){
    return(

        <input className={css.inputBox} value={display} readOnly/>

    )
}

export default DisplayBox;