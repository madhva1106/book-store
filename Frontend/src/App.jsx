import React from 'react';
import Home from './Home/Home';
import { Route, Routes } from "react-router-dom";
import Courses from './Courses/Courses';
import SignUp from './components/SignUp';
import Contactus from './components/Contactus';


function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white '>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Courses/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/Contactus' element={<Contactus/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App