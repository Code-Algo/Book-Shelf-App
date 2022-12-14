import React, {useEffect, useState} from 'react'
import apiBooks from '../api/apiBooks';
import { CancelToken } from 'apisauce';

export default function useBooks(bookID=null) {
    const [response, setResponse]=useState('')

    useEffect(
        ()=>{
            const source = CancelToken.source()
            const apiCallAll=async ()=>{
                const r = await apiBooks.get(source.token)
                setResponse(r)
            }
            const apiCallOne=async ()=>{
                const r = await apiBooks.getByCat(bookID, source.token)
                setResponse(r)
            }
            bookID ? apiCallOne():apiCallAll()
            return ()=>{source.cancel()}
        }
    ,[bookID])
  return response
}