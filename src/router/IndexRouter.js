import React from 'react';
import {BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'

import Login  from '../views/login/Login';
import NewsSandBox from '../views/newssandbox/NewsSandBox';

export default function IndexRouter() {
  const SignInWrapper = ({ children, currentUser }) => {
    return currentUser ? children : <Navigate  to="/login" replace/>;
  };
  
  return (
      <BrowserRouter >
        <Routes>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/*" element={
            <SignInWrapper currentUser={localStorage.getItem("token")}>
              <NewsSandBox></NewsSandBox>
            </SignInWrapper>
          } />
        </Routes>
      </BrowserRouter>
  )
}
