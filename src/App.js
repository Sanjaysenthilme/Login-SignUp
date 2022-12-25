import React from 'react';
// import './App.css'
import {Routes, BrowserRouter,Route} from 'react-router-dom'
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
     {/* <SignUp/> */}
    </div>
  );
}

export default App;
