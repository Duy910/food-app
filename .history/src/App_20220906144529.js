import MenuDetail from './Pages/MenuDetail';
import Default from './Pages/Default'
import Nav from './components/Nav';
import './App.css';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';


function App() {
  
  return (
   
    <>
     <Router>
        
        <Routes>
          <Route path='/' element={<Default />}/>
          <Route path='/menu' element={<MenuDetail />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
     </Router>
      
      
    </>
   
  );
}

export default App;
