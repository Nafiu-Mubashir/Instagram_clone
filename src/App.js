import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SingUp from './components/SingUp';
import Usersfield from './components/Usersfield';
import Profile from './components/Profile';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<Navigate to="/"/>}/>
        <Route path="/signup" element={<SingUp />}/>
        <Route path="/userfield" element={<Usersfield />} />
        <Route path="/profile" element={<Profile />}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <SignIn /> */}
      {/* <SingUp /> */}
    </>
  );
}

export default App;
