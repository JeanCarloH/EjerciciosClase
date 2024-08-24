import React, { useState } from"react";

const Ejercicio4 = () => {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(prevContador => prevContador + 1);
    };

    const decrementar = () => {
        setContador(prevContador => (prevContador > 0 ? prevContador - 1 : 0));
    };

    return (
        <div><h1>Contador: {contador}</h1><button onClick={incrementar}>Incrementar</button><button onClick={decrementar}>Decrementar</button></div>
    );
};

export default Ejercicio4;
