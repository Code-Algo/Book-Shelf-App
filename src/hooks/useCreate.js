

import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiCat from '../api/apiCategory'
import apiItem from '../api/apiItem'
import apiEditUser from '../api/apiEditUser'
import {useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


export default function useCreate(newUser) {

    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()


    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            const apiCalls=async ()=>{
                if(newUser.email && newUser.first_name && newUser.last_name && newUser.password){
                    // //item
                    // response = await apiItem.post(user?.token, newUser, source.token)
                    // // cat
                    response = await apiItem.post(user?.token, newUser, source.token)
                }

                if (!response?.error){
                    setAlert({msg: `${newUser.first_name} Created`, cat:'success'})
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


// import {useEffect, useContext} from 'react'
// import {CancelToken} from 'apisauce'
// import apiItem from '../api/apiItem'
// import apiCat from '../api/apiCategory' 
// import {useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'


// export default function useCreate(obj) {

//     const {user, setAlert} = useContext(AppContext)
//     const navigate = useNavigate()


//     useEffect(
//         ()=>{
//             let response
//             const source = CancelToken.source()
//             const apiCalls=async ()=>{
//                 if(obj.name && obj.desc){
//                     //item
//                     response = await apiItem.post(user?.token, source.token)
//                 }else if(obj.name){
//                     // cat
//                     response = await apiCat.post(user?.token, source.token)
//                 }

//                 if (!response?.error){
//                     setAlert({msg: `${obj.name} Created`, cat:'success'})
//                 }else if(response.error){
//                     setAlert({msg:response.error, cat:'warning'})
//                     navigate('/')
//                 }

//             }
//             if(obj){
//                apiCalls()
//             }
//         return(()=>{source.cancel()})
//         },[user.token, setAlert, navigate]
//     )
// }