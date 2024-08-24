import "./Ejercicio3.style.css"
import React from "react";
import { useEffect,useState } from "react";

const Ejercicio3 = () =>{
    const [contador, setContador] = useState(0);
    useEffect(() =>{
       const interval = setInterval(() =>{
         setContador(prevContador => {
            if(prevContador < 10){
                return prevContador + 1;
            }else{
                clearInterval(interval);
                return prevContador;
            }
         });
       }, 1000);
    },[])
    useEffect(() =>{
        if (contador === 10){
            alert("llegaste a 10")
            setContador(0);
        }
    })

    return (
        <>
        <div>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(0)}>Resetear</button>
        </div>
            <h1>contador:{contador}</h1>
        </>
    )
}
export default Ejercicio3;