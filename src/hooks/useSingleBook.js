import React, {useEffect, useState} from 'react'
import apiBooks from '../api/apiBooks';
import { CancelToken } from 'apisauce';

export default function useBooks(id) {
    const [response, setResponse]=useState('')

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const apiCallAll=async ()=>{
                const r = await apiBooks.getBook(id,source.token)
                setResponse(r)
            
            }
            if(id) {apiCallOne()}
            return ()=>{source.cancel()}
        }
    ,[id])
  return response
    }