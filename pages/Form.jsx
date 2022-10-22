import React from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "./features/todo/todoSlice";
import { v4 } from 'uuid';
import styles from '../styles/user.module.scss';


const Form = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = React.useState('')

  const addTodoHendler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    }
    dispatch(addTodo(todo))
    setTodoValue('')
  }

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input 
        type="text"
        value={todoValue}
        placeholder="Type something..."
        onChange={(e) => setTodoValue(e.target.value)}
        className={styles.formInput}
      /> 
      <button
        type="submit"
        className={styles.formButton}
        onClick={() => addTodoHendler()}
      >
        Submit
      </button>
    </form>
  )
}

export default Form;