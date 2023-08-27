import { useState } from "react";
import './Formulario'
const Formulario = () => {

     const [nombre, setNombre] = useState("")
     const [email, setEmail] = useState("");
     const [contraseña, setContraseña] = useState("")
     const [confirmacion, setConfirmacion] = useState("")
     const [error, setError] = useState(true)

    const validarIngreso = (e) => {
         e.preventdefault();

        if (nombre === ''){
            setError(false);
            return
         }
        setError(true)
     }
   

    return (
        <div className="formulario">
            
            <form onSubmit={validarIngreso} className="container text-center">
               
                <h2 className="text-center row" >Crear una cuenta</h2>
                <h3>{nombre}</h3>
                <div className="container row">
                    <label className="row ">Nombre</label>
                    <br/>
                    <input type="text" className=" 'from-control' row w-auto" placeholder="Nombre"onChange={(e) => setNombre(e.target.value)}/>
                </div>
                <div className="container row">
                    <label className="row ">Email</label>
                    <br/>
                    <input type="mail" className=" 'from-control' row w-auto" placeholder="Email"onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="container row ">
                    <label className="row ">Contraseña</label>
                    <br/>
                    <input type="text" className=" 'from-control' row w-auto" placeholder="Contraseña"onChange={(e) => setContraseña(e.target.value)}/>
                </div>
                <div className="container row mb-3">
                    <label className="row ">Confirmar Contraseña</label>
                    <br/>
                    <input type="text" className=" 'from-control' row w-auto" placeholder="Confirmar Contraseña"onChange={(e) => setConfirmacion(e.target.value)}/>
                </div>
                <button className="btn btn-warning row rounded-pill px-3" type='submit'>Enviar</button>
                {error ? <p>ingresa todos los datos</p>: <p>bien</p>}
            </form>
        </div>
    )
}

export default Formulario
