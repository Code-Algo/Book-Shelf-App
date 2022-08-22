import React, {useContext} from 'react' 
import Books from '../components/Books/Index'
import { Typography, Box } from '@mui/material'
import { AppContext } from '../context/AppContext'
import { CardTravel } from '@mui/icons-material'


export default function BooksPage() {
const {book} = useContext(AppContext)

  if(book.length<= 0){

    return(
      <Typography variant='h3' sx={{ml:'20px'}}>
          Your Book Shelf is Empty
      </Typography>
    )
  }
 
  return (
    <>
      <Box sx={{maxWidth:"75%", mx:"auto"}}>
        <Typography variant='h3' sx={{ml:'20px'}}>
          Your Books
        </Typography>
        <Books/>
      </Box>  
    </>
  )
}