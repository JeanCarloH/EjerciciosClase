import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Ejercicio2 from '../Ejercicio2/Ejercicio2';
import Ejercicio3 from '../Ejercicio3/Ejercicio3';
import Ejercicio4 from '../Ejercicio4/Ejercicio4';
import Ejercicio5 from '../Ejercicio5/Ejercicio5';
import CatImage from '../CatImage/CatImage';
import ApiGitHUb from '../ApiGitHub/ApiGitHub';
import NotFound from '../NotFound/NotFound';
import Formulario from '../Formulario/Formulario';
import LocalStorage from '../LocalStorage/LocalStorage';
import SharePropsDad from '../ShareProps/SharePropsDad';
import ParentComponent from '../ExerciseFinal/ParentComponent';
import ChildComponent from '../ExerciseFinal/ChildComponent';

const RoutesExercise2 = () => {
    return (
        <>
        <Routes>
            <Route path="/" element ={<Home/>} exact/>
            <Route path="/ejercicio2" element ={<Ejercicio2/>} exact/>
            <Route path="/ejercicio3" element ={<Ejercicio3/>} exact/>
            <Route path="/ejercicio4" element ={<Ejercicio4/>}  exact/>
            <Route path="/ejercicio5"  element ={<Ejercicio5/>}  exact/>
            <Route path="/catImage" element ={<CatImage/>}  exact/>
            <Route path="/apiGit" element ={<ApiGitHUb/>}  exact/>
            <Route path="/formulario" element ={<Formulario/>}  exact/>
            <Route path="/localStorage" element ={<LocalStorage/>}  exact/>
            <Route path="/shareProps" element ={<SharePropsDad/>}  exact/>
            <Route path="/exerciseFinal" element ={<ParentComponent/>}  exact/>
            <Route path="/exerciseFinal/child" element ={<ChildComponent/>}  exact/>
            <Route path="*" element ={<NotFound/>} />
        </Routes>
        </>
    );
    }
  export default RoutesExercise2;