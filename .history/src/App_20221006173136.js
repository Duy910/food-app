import MenuDetail from './Pages/MenuDetail';
import Default from './Pages/Default'
import Nav from './components/Nav';
import './App.css';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react'
import { fetchData } from '../src/Pages/CreateProduct'
import { getAllProducts, saveProducts } from './utils/firebase'
import { actionType, initState } from './store/reducer'
import reducer from '../store/reducer'
import { useContext } from 'react'
import Context from '../store/Context'

function App() {
  const [{ foodItems }, dispatch] = useContext(Context)
  const fetchData = async () => {
    await getAllProducts().then((products) => {
        console.log(products);
        dispatch({
            type: actionType.SET_FOOD_ITEMS,
            foodItems: products
        })
    })
}
useEffect(() => {
    fetchData()
  }, [])

  return (
   
    <>
      
      <Default />
    </>
   
  );
}

export default App;
