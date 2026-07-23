export default function Footer() {
  return (
    <>
        <section id="contact" className="section bg-light">
                <div className="container">
                <h2 className="section-title">Contate-me</h2>
                <p className="section-subtitle">Entre em contato para oportunidades</p>

                <div className="contact-container">
                    <div className="contact-info">
                    <div className="contact-card">
                        <i className="fas fa-envelope contact-icon"></i>
                        <h3>Email</h3>
                        <p>iarthur.almeida@gmail.com</p>
                        <a href="mailto:iarthur.almeida@gmail.com" className="contact-link">
                        Enviar mensagem <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className="contact-card">
                        <i className="fab fa-whatsapp contact-icon"></i>
                        <h3>WhatsApp</h3>
                        <p>+55 (79) 98857-1019</p>
                        <a href="https://wa.link/dpscdw" target="_blank" rel="noopener noreferrer" className="contact-link">
                        Enviar mensagem <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    <div className="contact-card">
                        <i className="fab fa-linkedin contact-icon"></i>
                        <h3>LinkedIn</h3>
                        <p>ivan-arthur</p>
                        <a href="https://www.linkedin.com/in/iarthurlago-23b7603a1" target="_blank" rel="noopener noreferrer" className="contact-link">
                        Conectar <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    </>
    );
}