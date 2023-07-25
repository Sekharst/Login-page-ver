import React from 'react';
import { Route, Routes } from 'react-router';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
    <div>
      {/* <LoginForm/> */}
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
    </>
   );
};

export default App;
