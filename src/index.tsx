import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { apolloClient } from './Services/apolloClient';
import { getEnvVar } from './Helpers/getEnvVar';
import App from './App';

const domain = getEnvVar('REACT_APP_AUTH0_DOMAIN') || "";
const clientId = getEnvVar('REACT_APP_AUTH0_CLIENTID') || "";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
