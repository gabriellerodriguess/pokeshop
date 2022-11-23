import {FaLinkedin , FaGithub, FaRegCopyright} from 'react-icons/fa'
import './styles.css'

export default function Footer() {
    return (
        <footer>
            <h3 className='author'> <FaRegCopyright /> Gabrielle Rodrigues</h3>
            <div className='links-contact'>
                <a target="_blank" href="https://github.com/gabriellerodriguess"> <FaGithub /> </a>
                <a target="_blank" href="https://www.linkedin.com/in/gabrielle-rodrigues381/"><FaLinkedin /></a>
            </div>
        </footer>
    )
}