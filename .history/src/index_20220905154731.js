import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Globals/GlobalStyles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MenuDetail from './Pages/MenuDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Router>
        <Route path='/' element={<App />}>
          <Route path='menu' element={<MenuDetail />}/>
          <Route />
        </Route>
      </Router>
    </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
