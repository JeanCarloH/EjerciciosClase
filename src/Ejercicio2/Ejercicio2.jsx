import React from "react";
import { useEffect,useState } from "react";

const  Ejercicio2 = () =>{
   const [contador, setContador] = useState(10);
   const aumentar = () =>{
    setContador(contador+1);
   }
    return (
       <div>
       <p>contador: {contador}</p>
       <button onClick={aumentar}>Incrementar +</button>
       </div>
    );
}
export default Ejercicio2;
