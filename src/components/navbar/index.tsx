import './navbar.css'

export function Navbar() {
    return (
        <nav className="navbar__container">
            <div>
                <img src=""></img>
                <a>Edgar Faria Barbosa</a>
            </div>
            <div>
                <ul className="ul__container">
                    <li>Sobre</li>
                    <li>Habilidades</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    )
}