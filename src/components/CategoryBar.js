import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import apiCat from '../api/apiCategory';
import { CancelToken } from 'apisauce'

export default function CategoryBar({actCat, setActCat}) {

    const [categories, setCategories] = useState([])

    useEffect(()=>{ 
    let source
    const apiCall = async ()=>{
        source = CancelToken.source(source.token)
        const {error, categories} = await apiCat.get(source.token)
        setCategories(categories)
    }
        apiCall()
    },[])
    


    const handleActCat = (cat) =>{
        if(actCat.id === cat.id){
            setActCat({})
        }else{
            setActCat(cat)
        }
    }


    return (
        <Stack direction="row" spacing={1}>
         
        {categories.map((cat)=>(
            cat.id === actCat.id?
            <Chip onClick={()=>{handleActCat(cat)}} key={cat.id} variant="contained" size="small" label={cat.name} color="primary" />
            :
            <Chip onClick={()=>{handleActCat(cat)}} key={cat.id} variant="outlined" size="small" label={cat.name} color="primary" />
        )
        )}
    
    
        </Stack>
      )
    }
    
