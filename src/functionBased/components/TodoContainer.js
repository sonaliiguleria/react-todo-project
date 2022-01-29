import React, {useState, useEffect} from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = id => {
        setTodos(prevState => {
            prevState.map(todo => {
                    if(todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo;
                })
        });
    };
    const delTodo = id => {
        setTodos([
              ...todos.filter(todo => {
                  return todo.id !== id
              }),
          ])
    };
    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false,
        };
        setTodos([...todos, newTodo])
    };
    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            }),
        )
    };
/*    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos) {
            const temp = JSON.stringify(this.state.todos) 
            localStorage.setItem("todos", temp)
        }
    };
    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    };
*/
function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
}
    return (
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputTodo addTodoProps={addTodoItem}/>
                    <TodoList 
                        todos={todos} 
                        handleChangeProps={handleChange} 
                        deleteTodoProps={delTodo}
                        setUpdate={setUpdate}
                    /> 
                </div>
            </div> 
            
    );
    
}
export default TodoContainer