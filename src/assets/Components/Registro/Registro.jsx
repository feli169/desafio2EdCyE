import SocialButton from "../SocialButton/SocialButton";
import { faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import './Registro.css'

const Registro = () => {
    return (
        <div className="container bg-white mt-2">
            <h1 className="text-center">Crea tu cuenta</h1>
            <div className="row">

                <div className="col-4 mx-2">
                <SocialButton icon={faLinkedin} />
                </div>

                <div className="col-4 mx-2">
                <SocialButton icon={faInstagram} />
                </div>

                <div className="col-4 mx-2">
                <SocialButton icon={faGithub} />
                </div>

            </div>

            <p className="text-center">o usa tu email para registrarte</p>
        </div>
    )
}

export default Registro




