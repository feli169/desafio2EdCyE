import { useState } from "react";
import './Formulario.css'

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmacion, setConfirmacion] = useState("");
    const [error, setError] = useState(false);

    const validarIngreso = (e) => {
        e.preventDefault();

        if (nombre === '' || email === '' || contraseña === '' || confirmacion === '') {
            setError(true);
            return;
        }

        if (contraseña !== confirmacion) {
            setError(true);
            return;
        }

        setError(false);
    }

    return (
        <div className="text-center">
            <form onSubmit={validarIngreso}>
                <h2 className="text-center">Crear una cuenta</h2>

                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" className="form-control" type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="contraseña">Contraseña</label>
                    <input id="contraseña" type="password" className="form-control" onChange={(e) => setContraseña(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="confirmacion">Confirmar Contraseña</label>
                    <input id="confirmacion" type="password" className="form-control" onChange={(e) => setConfirmacion(e.target.value)} />
                </div>

                <button className="btn btn-warning rounded-pill px-3 mt-2" type="submit">Enviar</button>

                {error ? <p>Completa todos los campos correctamente</p> : null}
            </form>
        </div>
    )
}

export default Formulario;
