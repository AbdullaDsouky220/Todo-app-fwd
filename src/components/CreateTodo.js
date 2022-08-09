import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
export const TodoContext = React.createContext();

function CreateTodo({doSomething}) {
  const [TodoListItems, setTodoListItems] = useState([]);
  const [inputFieldContent, setInputFieldContent] = useState('');
  const [chosenPriority, setChosenPriority] = useState('');
  doSomething(TodoListItems)
  return (
    <Stack spacing={2}>
      <header>
        <h1>ToDo List❗❗</h1>
      </header>

      <Stack spacing={5} direction="row">
        <TextField
         id="outlined-basic" 
        label="Add Todo" 
        variant="outlined" 
        value={inputFieldContent}
         onChange={(e)=>setInputFieldContent(e.target.value)}
/>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label " value='pir'>Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chosenPriority}
            label="Priority"
            onChange={(e)=>setChosenPriority(e.target.value)}
            
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Urgent">Urgent</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="primary"
          variant="outlined"
          onClick={(e) =>{
            if(inputFieldContent!==''&&chosenPriority!==''){
              setTodoListItems([
                ...TodoListItems,{
              id:TodoListItems.length,
              text:inputFieldContent,
              completed:false,
              priority:chosenPriority
              }])
              setInputFieldContent('')
              setChosenPriority('')
            }
          }
          }
        >
          Add Todo
        </Button>
      </Stack>
    </Stack>
  );
}

export default CreateTodo;
