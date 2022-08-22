import {useState, useEffect, useContext} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import  Avatar  from '@mui/material/Avatar';
import BookCard from './BookCard';
import { AppContext } from '../../context/AppContext';

const Books = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TheBooks({book}) {
  const {books} = useContext(AppContext)
  return (
    <Grid container spacing={2} sx={{m:1, pr:2, borderRadius:1, alignItems:"strech"}}>
        <Grid item md={4} sm={6} xs={12}>
            <Books sx={{height:'100%'}}>
                <Avatar alt={book.name} variant="rounded" src={book.img} sx={{height:'100%', width:'100%'}} />
            </Books>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
            <Books sx={{height:'100%'}}>
                <BookCard book={book}/>
            </Books>
        </Grid>
    </Grid>
  )
}