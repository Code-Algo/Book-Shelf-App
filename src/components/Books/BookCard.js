import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddRemoveBook from './AddRemoveBook';

export default function BookCard({book}) {
  return (
    <Card sx={{height:"100%"}}>
        <CardContent>
            <Typography variant="h6" gutterBottom>
                {book.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {book.desc.slice(0,20)}
            </Typography>
        </CardContent>
        <CardActions>
            <AddRemoveBook book={book}/>
        </CardActions>
    </Card>
  )
}