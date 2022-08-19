import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import InfoIcon from '@mui/icons-material/Info';
import { Box } from '@mui/system';
import Error from './Error';
import { CircularProgress } from '@mui/material';
import useBooks from '../hooks/useBooks';


export default function BookBrowser({categoryID}) {
    const {error, books} =useBooks(categoryID)
    
    const handleAddToCart = (book) =>{
        console.log("added", book.name, "to cart")
    }

   if (!books){
    return (
        <Box sx={{ display:"flex"}}>
            <CircularProgress/>
        </Box>
    )
} 
   if (error){
       return (
           <Box sx={{ display:"flex"}}>
               <Error>{error}</Error>
           </Box>
       )
   } 


  return (
    <ImageList cols={3}>
        {books.map((book)=>(
            <ImageListItem key={book.id}>
                <img src={book.img} srcSet={book.img} alt={book.name} loading="lazy"/>
                <ImageListItemBar
                title={book.name}
                actionIcon={<>
                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${book.title}`} onClick={()=>console.log('get more info')}>
                        <InfoIcon/>
                    </IconButton>
                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${book.title}`} onClick={()=>handleAddToCart(item)}>
                        <AddShoppingCartTwoToneIcon/>
                    </IconButton>

                </>}
                />

            </ImageListItem>
        ))}
    </ImageList>

  )
}