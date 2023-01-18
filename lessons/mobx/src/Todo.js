import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer( ()=> {
    console.log('render')
    return (
        <div>
            {todo.todos.map(t =>
                <div className="todo" key={todo.id}>
                    <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => todo.completeTodo(t.id)}
                    />
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>x</button>
                </div> )}
        </div>
    );
});

export default Todo;