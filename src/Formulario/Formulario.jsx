import React from "react";
import { useState,useEffect } from "react";
const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        ciudad: "",
    });

    //manejar cambios en los inputs
    const handleChange = (e) =>{
        setFormData({
            ...formData,  //estamos creando una copia del objeto
            [e.target.name]: e.target.value,
        });
    }

    //manejar el envio del formulario
    const handleSubmit = (e) =>{
        e.preventDefault(); //no queremos que la pagina se recargue.
        console.log(formData);
        //quiero limpiar el formulario
        setFormData({
            nombre: "",
            apellido: "",
            telefono: "",
            ciudad: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
            <label>Apellido</label>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange}/>
            <label>Telefono</label>
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
            <label>Ciudad</label>
            <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange}/>
            <button type="submit">Enviar</button>
        </form>
    );
}
export default Formulario;