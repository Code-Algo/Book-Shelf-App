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

const HomePage = ()=>(<h1>Welcome to Book Shelf</h1>)

function App() {
  return (
    <>
    <SnackBar/> 
    <NavBar>
    </NavBar>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/books" element={<BooksPage/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
