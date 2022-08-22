import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import SpeedDial from './components/SpeedDial';
import BookReport from './components/BookReport';
import BottomShelf from './components/BottomShelf'
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import EditUserForm from './forms/EditUserForm';
import SingleBook from './components/SingleBook';
import BooksPage from './views/BooksPage';
import Login from "./views/Login.js"
import {Route, Routes} from 'react-router-dom';
import SnackBar from './components/SnackBar';
import ViewBooks from './views/ViewBooks.js';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import LogOut from './views/LogOut.js';
import EditUser from './views/EditUser.js';
import RegisterUser from './views/RegisterUser.js';

const HomePage = ()=>(<h1>Welcome to Book Shelf</h1>)


function App() {
  // const {user} = useContext(AppContext)
  return (
    <>
    <SnackBar/> 
    <NavBar>
    </NavBar>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/books" element={<BooksPage/>}/> 
        <Route path="/books/:bookId" element={<SingleBook/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/viewbooks" element={<ViewBooks/>}/>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="/editprofile" element={<EditUser/>}/>
        <Route path="/register" element={<RegisterUser/>}/>
           
    </Routes>
    </>
  );
}

export default App;
