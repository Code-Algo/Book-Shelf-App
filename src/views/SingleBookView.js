import React, {useContext} from 'react' 
import Book from '../components/Books'
import { Typography, Box } from '@mui/material'
import { AppContext } from '../context/AppContext'


export default function BooksPage() {
 
  
 

  return (
    <>
      <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Book/>
      </Box>  
    </>
  )
}