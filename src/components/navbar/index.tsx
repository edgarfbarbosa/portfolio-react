import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar__container}>
            <div>
                <img src=""></img>
                <a>Edgar Faria Barbosa</a>
            </div>
            <ul className={styles['navbar__items--container']}>
                <li className={styles.navbar__items}>Home</li>
                <li className={styles.navbar__items}>Sobre</li>
                <li className={styles.navbar__items}>Habilidades</li>
                <li className={styles.navbar__items}>Projetos</li>
                <li className={styles.navbar__items}>Contato</li>
            </ul>
        </nav >
    )
}

export default Navbar