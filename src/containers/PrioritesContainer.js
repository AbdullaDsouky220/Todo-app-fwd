import React from 'react'
import Priority from "../components/Priority";
import TodoList from "../components/todoList";

export default function PrioritesContainer({TodoListItems}) {
  const lowPriorityList = TodoListItems.filter((item) => {
    return item.priority == "Low";
  });
  const mediumPriorityList = TodoListItems.filter((item) => {
    return item.priority == "Medium";
  });
  const highPriorityList = TodoListItems.filter((item) => {
    return item.priority == "High";
  });
  const urgentPriorityList = TodoListItems.filter((item) => {
    return item.priority == "Urgent";
  });
  return (
    <div className="todo-lists-container">
    <Priority list={lowPriorityList} priority={"Low 😪"} />
    <Priority list={mediumPriorityList} priority={"Medium 🥱"} />
    <Priority list={highPriorityList} priority={"High 😐"} />
    <Priority list={urgentPriorityList} priority={"Urgent 😮"} />
  </div> 
  )
}
