import {createContext, useState} from "react"


export const AppContext = createContext();


const AppContextProvider = ({children})=>{
    const getUserFromLS=()=>{
        let u=localStorage.getItem('user-candes')
        if (u){
            return JSON.parse(u)
        }
    }

    const [alert, setAlert] =useState({})
    const [user, _setUser] =useState(getUserFromLS()??'')

    const setUser=(user)=>{
        localStorage.setItem('user-candes', JSON.stringify(user))
        _setUser(user)
    }


    const values={
        alert,
        setAlert,
        user,
        setUser
    }
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider