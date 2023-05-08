import styles from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <section className={styles.about__container}>
            <div>
                <h1 className={styles.about__title}>Sobre mim</h1>
                <p className={styles.about__phrase}>Sou Desenvolvedor Front-end e estudante de Engenharia de Software, moro atualmente na Região Serrana do Rio de Janeiro.</p>
                <p className={styles.about__phrase}>No momento estou trabalhando para melhorar minhas habilidades em JavaScript, TypeScript e React.</p>
                <p className={styles.about__phrase}>Tecnologias e ferramentas que me mantenho explorando e aprimorando:</p>
                <ul className={styles['about__language--container']}>
                    <li className={styles.about__language}>HTML5</li>
                    <li className={styles.about__language}>CSS3</li>
                    <li className={styles.about__language}>JavaScript</li>
                    <li className={styles.about__language}>TypeScript</li>
                    <li className={styles.about__language}>React</li>
                </ul>
                <button className={styles.about__btn}>Currículo</button>
            </div>
        </section >
    )
}

export default AboutMe