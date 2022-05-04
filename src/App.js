import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import AddTodo from './pages/addTodo';
import ViewTodo from './pages/viewTodo';
import SignUp from './pages/signUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='addtodo' element={<AddTodo />} />
        <Route path='viewtodo' element={<ViewTodo />} />
      </Routes>
    </div>
  );
}

export default App;
