import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id:1, title: {id:1, name: 'alfa'}, completed: false},
        {id:2, title: 'Посмотри ULBI TV', completed: false},
        {id:3, title: 'поставь лайк', completed: false},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo){
        this.todos.push(todo)
    }

    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('remove')
    }

    completeTodo(id){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo)
        console.log('completed')
    }

}

export default new Todo()