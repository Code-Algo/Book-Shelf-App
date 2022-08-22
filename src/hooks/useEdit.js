


import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiCat from '../api/apiCategory'
import apiItem from '../api/apiItem'
import apiEditUser from '../api/apiEditUser'
import {useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export default function useEdit(id, newUser) {

    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()


    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            const apiCalls=async ()=>{
                if(id && newUser.email && newUser.first_name && newUser.last_name && newUser.password){
                    // //item
                    // response = await apiItem.post(user?.token, newUser, source.token)
                    // // cat
                    response = await apiItem.put(user?.token, id, newUser, source.token)
                }

                if (!response?.error){
                    setAlert({msg: `${newUser.first_name} Edited`, cat:'success'})
                    navigate('/')
                }else if(response.error){
                    setAlert({msg:response.error, cat:'warning'})
                    navigate('/')
                }

            }
            if(newUser){
               apiCalls()
            }
        return(()=>{source.cancel()})
        },[newUser, user.token, setAlert, navigate]
    )
}

