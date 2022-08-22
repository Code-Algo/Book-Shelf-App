

import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiCat from '../api/apiCategory'
import apiItem from '../api/apiItem'
import apiEditUser from '../api/apiEditUser'
import {useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export default function useDelete(id, currentUser) {

    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()


    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            const apiCalls=async ()=>{
                if(id ,currentUser){
                    // //item
                    // response = await apiItem.post(user?.token, newUser, source.token)
                    // // cat
                    response = await apiItem.del(user?.token, currentUser.id, source.token)
                }

                if (!response?.error){
                    setAlert({msg: `${currentUser.first_name} deleted`, cat:'success'})
                    navigate('/')
                }else if(response.error){
                    setAlert({msg:response.error, cat:'warning'})
                    navigate('/')
                }

            }
            if(currentUser){
               apiCalls()
            }
        return(()=>{source.cancel()})
        },[currentUser, user.token, setAlert, navigate]
    )
}

