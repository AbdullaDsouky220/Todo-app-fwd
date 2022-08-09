import React, { Fragment,useState } from "react";
import Sidebar from "../components/Sidebar";
import CreateTodo from "../components/CreateTodo";
import { Outlet, Route, Routes } from "react-router";
import PrioritesContainer from "./PrioritesContainer";
import Search from "../components/Search";
import SearchContainer from "./SearchContainer";
export const TodoContext = React.createContext();
function TodoApp() {
  const [TodoListItems,setTodoListItems] = useState([])
 
  const GetListHandlerFunction=(state)=>{
    setTodoListItems(state)
  }
  return (
    <Fragment>
      <main className="App main-layout">
        <Sidebar className="side-navbar-section" />
          <div>
            <Search list={TodoListItems}/>
         <Routes>
          <Route path='/'
          element={
          <CreateTodo doSomething={GetListHandlerFunction}/>} />
   
         

          </Routes>
          <PrioritesContainer TodoListItems={TodoListItems}/>
          <Outlet/>
          </div>
      </main>
    </Fragment>
  );
}

export default TodoApp;
