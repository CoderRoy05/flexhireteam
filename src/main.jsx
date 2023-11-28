import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import App from './App.jsx';

// const rootElement = document.getElementById('root');
  // not 
// // Use createRoot to enable concurrent rendering
 //  not 
// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);