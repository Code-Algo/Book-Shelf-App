import React, {useState} from 'react'
import CategoryBar from '../components/CategoryBar'
import { Typography, Box } from '@mui/material'
import BookBrowser from '../components/BookBrowser';

export default function ViewBooks() {
    const [actCat, setActCat]=useState({});

  return (
    <>
    <Typography variant='h3'>Browse our Books</Typography>
    <Box sx={{minWidth:"300px", maxWidth:"1000px", display:"flex", justifyContent:"center",  mx:"auto" }}>
        <CategoryBar actCat={actCat} setActCat={setActCat}/>
    </Box>
    <Box sx={{minWidth:"300px", maxWidth:'1000px', display:"flex",  mx:"auto" }}>
        <BookBrowser categoryID={actCat?.id}/>
    </Box>
    </>
  )
}