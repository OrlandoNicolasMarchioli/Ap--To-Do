
import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [todos,setTodos] = useState([])

  const lineThrough = (i) =>setTodos(todos.map((todo, k)=> k===i ? {
    ...todo,
    complete: !todo.complete
  }: todo))
  return(

    <div className="app">
      <h1 className="todo__title">Lista de tareas</h1>
      <Form onSubmit={text => setTodos([{text,complete:false}, ...todos])}/>{/* crea un nuevo array y contiene a los anteriores*/}
      <div>
        {
          todos.map(({text, complete},i) => (
            <div key={text} onClick={()=> lineThrough(i)}
          style={
            {textDecoration: complete ? "line-through": "",fontFamily: complete ?"cursive": ""}
            }
          >
            {text}
          </div>
          ))
        }
      </div>
    </div>
  )
}
export default App
