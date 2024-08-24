import logo from './logo.svg';
import './App.css';
import React from 'react';
import RoutesExercise2 from './RoutesExercise2/RoutesExercise2';
import { BrowserRouter } from 'react-router-dom';

const App = () =>{
  return (
   <div>
       <BrowserRouter>
       <RoutesExercise2 />
       </BrowserRouter>
     
   </div>
  );
}

export default App;
