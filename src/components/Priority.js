import React from 'react'
import { TodoContext } from '../containers/TodoBuilder'
import '../styles/todo.css'
import TodoList from './todoList'
function Priority({priority,list}) {
  return (
    <div className='todo-list-container'>
        <header>
          <h3  >
       {priority}
          </h3>
        </header>
     <TodoList itemsList={list}/>
    </div>
  )
}

export default Priority
