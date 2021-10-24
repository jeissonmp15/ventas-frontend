import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/scss/bootstrap.scss';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev--wvr5fih.us.auth0.com"
      clientId="VM83QELJJUYLsH4nI8D8zxn8DYjseHB9"
      redirectUrl={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode >,
  document.getElementById('root')
);

