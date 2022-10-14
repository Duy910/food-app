import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Globals/GlobalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuDetail from './Pages/MenuDetail';
import Cart from './Pages/Cart';
import Default from './Pages/Default';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Provider from './store/Provider';
import CreateProduct from './Pages/CreateProduct';
import { useEffect } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider>
      <GlobalStyles>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/menu' element={<MenuDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/create-product' element={<CreateProduct />} />
          </Routes>
        </Router>
      </GlobalStyles>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
