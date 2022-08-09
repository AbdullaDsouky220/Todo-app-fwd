import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../containers/TodoBuilder'
const  TodoList  =({itemsList})=> {
  const TodoListObject = useContext(TodoContext)
  return (
      <>
      <ol >
        {itemsList.map((item) => (
          <TodoItem todo={item}
           id={itemsList.indexOf(item)}
            key={item.id} />
        ))}
      </ol>
      </>
    );
  
}

export default TodoList;