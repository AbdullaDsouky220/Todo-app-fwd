import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Link } from 'react-router-dom';
export const ListContext=React.createContext()
export default function Search({list,SearchedContent}) {

  return (
   <div  className='search-input-container'>
      <InputBase
     
        sx={{ ml: 1, flex: 2 }}
        placeholder="Search on your tasks"
        inputProps={{ 'aria-label': 'search on your tasks' }}
        onChange={(e)=>SearchedContent(e)}

      />
      <Link to='/search'>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Link>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    <Link to='/'>
    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Link>
   </div>)
}
