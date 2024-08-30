import React from "react";
import SharePropsChild from "./SharePropsChild";
import { useState } from "react";

const SharePropsDad = () => {
    const [contador, setContador] = useState(0);
    const handleIncrementar = () => {
        setContador(contador + 1);
    }
    const handleDecrementar = () => {
        setContador(contador - 1);
    }
    const handleResetear = () => {
        setContador(0);
    }
    const restarDiez = () => {
        setContador(contador - 10);
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <h1>Contador: {contador}</h1>
            <button onClick={handleIncrementar}>Incrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
            <button onClick={handleResetear}>Resetear</button>
            <SharePropsChild contador={contador} handleIncrementar={handleIncrementar} handleDecrementar={handleDecrementar} handleResetear={handleResetear} restarDiez={restarDiez} />
        </div>
    );
}
    export default SharePropsDad;