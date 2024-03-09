import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbarcomponent/Navbar';
import Header from './KOINX/Header';
import 'bulma/css/bulma.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    {/* <Navbar /> */}
    <App />
  </React.StrictMode>
);
reportWebVitals();
