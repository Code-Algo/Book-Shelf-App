import {createContext, useState, useReducer, useEffect} from "react"
import { bookReducer, bookActions } from "../reducers/bookReducer";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
const [alert, setAlert] = useState({})

    const values ={
        alert,
        setAlert
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}


// export const AppContext = createContext();


// const AppContextProvider = ({children})=>{
//     const getUserFromLS=()=>{
//         let u=localStorage.getBook('user-books')
//         if (u){
//             return JSON.parse(u)
//         }
//     }

//     const getCartFromLS=()=>{
//         let c=localStorage.getBook('books-book')
//         if (c){
//             return JSON.parse(c)
//         }
//     }

//     const [alert, setAlert] = useState({})
//     const [user, _setUser]  = useState(getUserFromLS()??'')
//     const [cart, dispatch]  = useReducer(bookReducer, getCartFromLS()??[])

//     useEffect(
//         ()=>{
//             localStorage.setItem('cart-candes', JSON.stringify(cart))
//         },
//         [cart]
//     )

//     const setUser=(user)=>{
//         localStorage.setItem('user-candes', JSON.stringify(user))
//         _setUser(user)
//     }


//     const values={
//         alert,
//         setAlert,
//         user,
//         setUser,
//         cart,
//         addToCart:(book)=>{
//             dispatch({type: bookActions.addToBooks, book})
//         },
//         addBulkToCart:(book)=>{
//             dispatch({type: bookActions.addBulkToBooks, book})
//         },
//         removeFromCart:(book)=>{
//             dispatch({type: bookActions.removeFromBooks, book})
//         },
//         removeAllFromCart:(book)=>{
//             dispatch({type: bookActions.removeAllFromBooks, book})
//         },
//         emptyCart:()=>{
//             dispatch({type: bookActions.emptyBooks})
//         }
//     }
    
//     return (
//         <AppContext.Provider value={values}>
//             {children}
//         </AppContext.Provider>
//     )
// }

export default AppContextProvider