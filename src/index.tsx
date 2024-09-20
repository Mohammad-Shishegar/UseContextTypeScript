import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
// import App from './App';

// React Context TypeScript
// import App from "./UsersContext/App"
// import { UserContextProvider } from './UsersContext/UserContext';

//React UseReducer with Context TypeScript
import App from "./UserReducer/App"
import { UserContextProvider } from './UserReducer/UserContext';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
