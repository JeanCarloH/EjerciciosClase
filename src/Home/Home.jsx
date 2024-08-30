import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
    const {value} = useSelector((state) => state.contadorSlice);
    return (
        <div>
            <h1>Home</h1>
            <p>Este es el Home</p>
            <p>esto es lo que hay actualmente en reduxToolkit acerca de la variable contador: {value}</p>
        </div>
    );
}
export default Home;