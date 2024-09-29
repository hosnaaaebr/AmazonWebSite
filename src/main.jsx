// import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AmazonProvider from "./Context/NavBar/AmazonProvider";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
         <BrowserRouter>
          < AmazonProvider>
          <App />
          </AmazonProvider> 
         </BrowserRouter>
);
