import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/Footer.svg)" }}>
                <div className="redes">
                    <a href="https:/www.aluracursos.com/">
                        <img src="/img/twitter.svg" alt="twitter" />
                    </a>
                    <a href="https:/www.aluracursos.com/">
                        <img src="/img/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https:/www.aluracursos.com/">
                        <img src="/img/instagram.svg" alt="instagram" />
                    </a>
                </div>
                <img src="/img/Logo.svg" alt="org" />
                <strong>Desarrollado por Alberto Romero Huerta</strong>
           </footer>
}

export default Footer