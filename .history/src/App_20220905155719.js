import MenuDetail from './Pages/MenuDetail';
import Default from './Pages/Default'
import './App.css';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


function App() {
  
  return (
   
    <>
      <Default />
      <Outlet />
      
    </>
   
  );
}

export default App;
