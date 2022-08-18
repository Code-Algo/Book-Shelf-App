import React from 'react'
import Books from './Books'
import Box from '@mui/material/Box'
export default function Index() {
    const books= [{
        "id":2,
        "title":"bookB",
        "desc":"bookB is good",
        "img":"https://images-na.ssl-images-amazon.com/images/I/81WUAoL-wFL.jpg",
        "category_id":1,
        "category_name":'Fiction'
      },{
        "id":1,
        "name":"bookA",
        "desc":"bookA is good",
        "img":"https://i.pinimg.com/originals/04/e2/82/04e282511c88efa57afeaff8975b3f2e.jpg",
        "category_id":1,
        "category_name":'Fiction'
      },{
        "id":1,
        "name":"bookA",
        "desc":"bookA is good",
        "img":"https://covers.openlibrary.org/b/id/6475296-L.jpg",
        "category_id":1,
        "category_name":'Fiction'
      },{
        "id":4,
        "name":"hey",
        "desc":"bookA is good",
        "img":"https://images-na.ssl-images-amazon.com/images/I/91GI0dCqaAL.jpg",
        "category_id":1,
        "category_name":'Fiction'
      },{
        "id":5,
        "name":"another item",
        "desc":"bookA is good",
        "img":"https://images-na.ssl-images-amazon.com/images/I/91ycNzZu1mL.jpg",
        "category_id":1,
        "category_name":'Fiction'
      }
    
    ]

  return (
   <>
    <Box sx={{mb:15}}>
        {
            [...new Set(books?.map(JSON.stringify))]?.map(JSON.parse)?.map(
                (book)=><Books key={book.id} book={book}/>
            )
        }
    </Box>
   </>


  )
}