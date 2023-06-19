import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MessageThread from './screens/MessageThread';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/message/:id' element={<MessageThread/>}/>
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);

