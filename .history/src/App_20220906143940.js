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
        <Nav />
        <Routes>
          <Route path='/' element={<Default />}/>
          <Route path='/menu' element={<MenuDetail />}/>
          <Route path='/cart' element={<MenuDetail />}/>
        </Routes>
     </Router>
      
      
    </>
   
  );
}

export default App;
