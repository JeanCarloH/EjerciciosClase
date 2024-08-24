import React from "react";
import { useEffect,useState } from "react";
import "./Ejercicio.style.css"

const  Ejercicio2 = () =>{
   const [contador, setContador] = useState(10);
   const aumentar = () =>{
    setContador(contador + 1);
   }
   const disminuir = () =>{
      setContador(contador - 1);
     }
   
    return (
       <div>
       <p>contador: {contador}</p>
       <div className="Ejercicio2__div--botones">
       <button onClick={disminuir} className="Ejercicio2__button--buttonLess">Incrementar -</button>
       <button onClick={aumentar} className="Ejercicio2__button--buttonAdd">Incrementar +</button>
       </div>
       </div>
    );
}
export default Ejercicio2;
