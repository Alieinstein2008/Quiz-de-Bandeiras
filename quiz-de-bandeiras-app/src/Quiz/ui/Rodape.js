import './Rodape.css'
import gitIcon from '../icons/github-icon.svg';
import instagramIcon from '../icons/instagram-icon.svg';
import linkedinIcon from '../icons/linkedin-icon.svg';
export default function Rodape(){
    
    return(
        <footer className='rodape'>
            <div className='copyright'>
                <p>&copy; 2025 Copyright - Arthur Alonso</p>
            </div>
            <div className='contatos'>
                <p>Contatos</p>
                <img src={gitIcon} alt='github icon'></img>   
                <img src={instagramIcon} alt='instagram icon'></img>   
                <img src={linkedinIcon} alt='linkedin icon'></img>   
            </div>   
            
        </footer>
    )
    
}