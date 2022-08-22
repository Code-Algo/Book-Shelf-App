import {createContext, useState, useReducer, useEffect} from "react"
import { bookReducer, bookActions } from "../reducers/bookReducer";
import BooksPage from "../views/BooksPage";

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
//     const getUserFromLS=()=>{
//         let u=localStorage.getItem('user')
//         if (u){
//             return JSON.parse(user)
//         }
//     }
const [alert, setAlert] = useState({})
const [books, setBooks] = useState({})
const [user, setUser] = useState({})
const [book, dispatch] = useReducer(bookReducer, [])

//  const setUser=(user)=>{
//     localStorage.setItem('user', JSON.stringify(user))
//     _setUser(user)
//}


    const values ={
        alert,
        setAlert,
        books,
        setBooks,
        user,
        setUser,
        book,
        addToBooks:(item)=>{
        dispatch({type: bookActions.addToBooks, item})
        },
        addBulkToBooks:(item)=>{
        dispatch({type: bookActions.addBulkToBooks, item})
        },
        removeFromBooks:(item)=>{
        dispatch({type: bookActions.removeFromBooks, item})
        },
        removeAllFromBooks:(item)=>{
        dispatch({type: bookActions.removeAllFromBooks, item})
        },
        emptyBooks:()=>{
            dispatch({type: bookActions.emptyBooks})
        }
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}





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