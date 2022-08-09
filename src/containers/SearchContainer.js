import React ,{useState} from 'react'
import PrioritesContainer from './PrioritesContainer'
import Search from '../components/Search'

function SearchContainer({list}) {
    const [FilteredList,setFilteredList]=useState([])
    const SearchedFilteredContent=(e)=>{
            const filterArray=list.filter((item)=>item.text.contains(e.target.value))
            setFilteredList(filterArray)
            console.log(filterArray)
        
    }
  return (
    <>
    <Search SearchedContent={SearchedFilteredContent} />
      <PrioritesContainer TodoListItems={FilteredList} />
    </>
  )
}

export default SearchContainer
