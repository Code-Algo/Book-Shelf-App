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

function App() {
  return (
    <>
    <NavBar>
    </NavBar>
    <SingleBook>
    </SingleBook>
    <LoginForm>
    </LoginForm>
    <RegisterForm>
    </RegisterForm>
    <EditUserForm>
    </EditUserForm>
    {/* <BookReport>
    </BookReport>
    <SpeedDial>
    </SpeedDial>
    <BottomShelf>
    </BottomShelf> */}

    </>
  );
}

export default App;
