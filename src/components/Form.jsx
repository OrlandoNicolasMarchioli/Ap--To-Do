import { useState } from "react";
import '../App.css';
import react from "react";


const useInputValue = (initialValue) =>{
    const [value,setValue] = useState(initialValue)

    return{
        value,
        onChange: e => setValue(e.target.value),
        resetValue:()=> setValue("")
    }

}

const Form = ({onSubmit}) => {
    const {resetValue,...text} = useInputValue("")//resetea el placeholder y mantiene los datos
    return (
        <form onSubmit={e =>{
            e.preventDefault();
            onSubmit(text.value);//envio el valor del texto
            resetValue();
            }}>
            <input className="listInput"
                placeholder="Ingrese una tarea y presione ENTER " {...text}
            />
        </form>
    )
}

export default Form
