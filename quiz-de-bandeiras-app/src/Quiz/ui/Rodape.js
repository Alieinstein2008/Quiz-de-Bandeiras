import './Rodape.css'
import gitIcon from '../icons/github-icon.svg';
import instagramIcon from '../icons/instagram-icon.svg';
import linkedinIcon from '../icons/linkedin-icon.svg';
export default function Rodape() {

    return (
        <footer className='rodape'>
            <div className='copyright'>
                <p>&copy; 2025 Copyright - Arthur Alonso</p>
            </div>
            
            <div className='contatos' title='Entre em contato'>
                <div className='frameIconGroup'>
                    <div className='frameIcon'>
                    <a href='https://github.com/Alieinstein2008'>
                        <img src={gitIcon} alt='ícone visual do github '  title='Entre em contato pelo Github'></img>
                    </a>
                    </div>
                    <div className='frameIcon'>
                        <a href='https://www.instagram.com/_alonsow_?igsh=YzZqaXRqeHR6eXk1'>
                            <img src={instagramIcon} alt='ícone visual do instagram'title='Entre em contato pelo Instagram' ></img>
                        </a>

                    </div>
                    <div className='frameIcon'>
                        <a href='https://www.linkedin.com/in/arthuralonsomarcelino/' >
                            <img src={linkedinIcon} alt='ícone visual do linkedin'title='Entre em contato pelo Linkedin' ></img>
                        </a>
                    </div>
                    
                </div>
            </div>

        </footer>
    )

}