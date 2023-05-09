import styles from './Footer.module.css'

import GitHubIcon from '../../assets/img/icons/github.svg'
import LinkedInIcon from '../../assets/img/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer className={styles.footer__container}>
            <div>
                <img src={LinkedInIcon}></img>
                {/* <img src={GitHubIcon}></img> */}
            </div>
        </footer>
    )
}

export default Footer