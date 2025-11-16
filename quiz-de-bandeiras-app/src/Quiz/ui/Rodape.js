import './Rodape.css'


export default function Rodape(){
    
    return(
      
        <footer>
        
            <div className="footer_content">
                <ul class="footer-list">
                    <li>
                        <h3>Contato</h3>
                    </li>
                    <li>
                        <p className="footer-link">E-mail: arthuralonsobussines@gmail.com</p>
                    </li>
                    <li>
                        <p className="footer-link">Telefone: (32) 9198-6860</p>
                    </li>
                </ul>

                
                <div className="footer_contacts">
                    <h3>Redes Sociais</h3>

                    <div className="footer_social_media">
                        <a href="https://www.instagram.com/_alonsow_?igsh=YzZqaXRqeHR6eXk1/"
                            target="_blank" className="footer-link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://github.com/Alieinstein2008"
                            target="_blank" className="footer-link">
                           <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arthuralonsomarcelino?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank" className="footer-link">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>

                    </div>
                </div>


            </div>
            <div className="copy">
                <p>&copy; 2025 Copyright - Arthur Alonso</p>
            </div>
        </footer>
        
      

    )

}
