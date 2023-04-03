import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar__container">
            <div>
                <img src=""></img>
                <a>Edgar Faria Barbosa</a>
            </div>
            <ul className="navbar__items--container">
                <li className="navbar__items">Home</li>
                <li className="navbar__items">Sobre</li>
                <li className="navbar__items">Habilidades</li>
                <li className="navbar__items">Projetos</li>
                <li className="navbar__items">Contato</li>
            </ul>
        </nav>
    )
}

export default Navbar