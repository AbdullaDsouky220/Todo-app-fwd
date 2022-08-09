import React,{useState} from "react";
import "../styles/todo.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
function TodoItem({ todo,id }) {
  const [completedState, setCompleteState] = useState(todo.completed)
  const changeStateHandler=()=>{
    setCompleteState(!completedState)
  }
  return (
    <li className="todo-item-container ">
      <div className='flex-row'>
        <h2>{completedState?<VerifiedIcon color='success'/>:<UnpublishedIcon color='error'/>}</h2>
        <header className="flex-column "  style={{cursor:'pointer'}}onClick={changeStateHandler}>
        <h3>{id+1}- {completedState?<del
         style={{'opacity':'0.6'}}>todo.text</del>:todo.text}
        </h3>
        
        </header>
      </div>
    </li>
  );
}

export default TodoItem;
