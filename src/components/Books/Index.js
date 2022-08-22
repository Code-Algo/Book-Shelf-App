import {useState, useEffect, useContext} from 'react';
import React from 'react'
import Books from './Books'
import Box from '@mui/material/Box'
import { AppContext } from '../../context/AppContext';


export default function Index() {
    
  const {book} = useContext(AppContext)

  return (
   <>
    <Box sx={{mb:15}}>
        {
            [...new Set(book?.map(JSON.stringify))]?.map(JSON.parse)?.map(
                (book)=><Books key={book.id} book={book}/>
            )
        }
    </Box>
   </>


  )
}