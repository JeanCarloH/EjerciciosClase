import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Ejercicio2 from '../Ejercicio2/Ejercicio2';
import Ejercicio3 from '../Ejercicio3/Ejercicio3';
import Ejercicio4 from '../Ejercicio4/Ejercicio4';
import Ejercicio5 from '../Ejercicio5/Ejercicio5';
import WeatherApi from '../WeatherApi/WeatherApi';
import ApiGitHUb from '../ApiGitHub/ApiGitHub';


const RoutesExercise2 = () => {
    return (
        <>
        <Routes>
             <Route path="/" element ={<Home/>} exact/>
            <Route path="/ejercicio2" element ={<Ejercicio2/>} exact/>
            <Route path="/ejercicio3" element ={<Ejercicio3/>} exact/>
            <Route path="/ejercicio4" element ={<Ejercicio4/>}  exact/>
            <Route path="/ejercicio5"  element ={<Ejercicio5/>}  exact/>
            <Route path="/weatherapi" element ={<WeatherApi/>}  exact/>
            <Route path="/apigit" element ={<ApiGitHUb/>}  exact/>
        </Routes>
        </>
    );
    }
  export default RoutesExercise2;