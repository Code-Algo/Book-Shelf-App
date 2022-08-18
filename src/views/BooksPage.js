import React, {useContext} from 'react'
import Books from '../components/Books/Index'
import { Typography, Box } from '@mui/material'
import { AppContext } from '../context/AppContext'

export default function BooksPage() {
 

  return (
    <>
    
      <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Typography variant='h3' sx={{ml:'20px'}}>Your Books 
        </Typography>
        <Books/>
      </Box>  
    </>
  )
}