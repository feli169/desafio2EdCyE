import { useState } from "react";
import './Formulario.css'



const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("")
    const [confirmacion, setConfirmacion] = useState("")
    const [error, setError] = useState(false)

    const validarIngreso = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contraseña === '' || confirmacion === '') {
            setError(true);
            return
        }
        setError(false);
    }

    nombre = useState("")

    return (
        <div className="text-center">
            <form onSubmit={validarIngreso}>

                <div className="form-group">
                    <label >Nombre</label>
                    <input className=" form-control" type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input type="mail" className=" form-control " onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group ">
                    <label >Contraseña</label>
                    <input type="text" className=" form-control " onChange={(e) => setContraseña(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label >Confirmar Contraseña</label>
                    <input type="text" className=" form-control" onChange={(e) => setConfirmacion(e.target.value)} />
                </div>

                <button className="btn btn-warning rounded-pill px-3 mt-2" type="submit">Enviar</button>

                {error ? <p>Completa todos los campos !</p> : null}

            </form>
        </div>
    )
}

export default Formulario
