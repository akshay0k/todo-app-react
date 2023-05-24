
import React,{useState} from 'react'

function TodoForm(props){
const [input,setInput] = useState('');

const handleChange = e =>{
    setInput(e.target.value);
}

const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
        id:Math.flor(Math.random*(1000)),
        text: input
    })
}
  return (

    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Add a Todo'
        value={input} 
        name='text'
        className='todo-input'
        onChange={handleChange}/>
        <button className='todo-button'>
            Add todo
        </button>
    </form>
 
  )
}


export default TodoForm