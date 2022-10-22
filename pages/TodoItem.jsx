import React from "react";
import styles from "../styles/user.module.scss";
import { useDispatch } from "react-redux";
import { toggleComletedTodo, removeTodo } from "./features/todo/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const toggleTodoHandler = (id) => {
        dispatch(toggleComletedTodo(id));
    };

    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className={styles.todoItem}>
            <div
                onClick={() => toggleTodoHandler(todo.id)}
                className={styles.todoComplete}
            >
                Complete
            </div>
            <div className={`${styles.todoText} ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>{todo.text}</div>
            <div
                onClick={() => removeTodoHandler(todo.id)} 
                className={styles.todoDelete}>Delete</div>
        </div>
    );
};

export default TodoItem;
