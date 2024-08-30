import React from 'react';
import { useState,useEffect } from 'react';
import { incrementar,decrementar,resetear,setValue } from '../store/slices/contador';
import { useSelector, useDispatch } from 'react-redux';

const LocalStorage = () => {
    // usar el slice para guardar el contador en el local storage
    const dispatch = useDispatch();
    const {value} = useSelector((state) => state.contadorSlice);
    const [contador, setContador] = useState(0);
 // asi modifico los valores de los metodos
    const handleIncrementar  = () => {
        dispatch(incrementar());
        
    };
    const handleDecrementar  = () => {
        dispatch(decrementar());
    };
    const handleResetear  = () => {
        dispatch(resetear());
    };

    useEffect(() => {
        setContador (value);
    }
    , [value]);
useEffect(() => {
    console.log("soy el valor de contadorRedux",value);
    dispatch(setValue(value));
}
, [value]);
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={handleIncrementar}>Incrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
            <button onClick={handleResetear}>Resetear</button>
        
       
        </div>
    );
}
export default LocalStorage;