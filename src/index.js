import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from './context/globalState.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="614410069366-maihc845lh8h8n1tlkf6gjm327iov63u.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <GlobalStateProvider>
          <App />
        </GlobalStateProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);