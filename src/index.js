import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta name="description" content="Little Lemon - Your favorite spot for delicious food!" />
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Little Lemon Description"/>
      <meta name="og:image" content="Little Lemon's Cuisines"/>
      <title>Little Lemon</title>
      <script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
    </Helmet>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
