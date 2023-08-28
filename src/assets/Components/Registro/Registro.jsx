import SocialButton from "../SocialButton/SocialButton";
import { faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'

const Registro = () => {
    return (
        <div>
            <h1 className="text-center row">Crea tu cuenta</h1>
            <SocialButton icon={faLinkedin} />
            <SocialButton icon={faInstagram} />
            <SocialButton icon={faGithub} />
            <p className="text-center">o usa tu email para registrarte</p>
        </div>
    )
}

export default Registro




