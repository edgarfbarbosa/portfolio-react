import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home__container}>
      <div className={styles['home__content--container']}>
        <h1 className={styles.home__title}>Edgar Faria Barbosa</h1>
        <h2 className={styles.home__subtitle}>Front-end Developer</h2>
        <p className={styles.home__phrase}>
          Sou estudante de Engenharia de Software e estou me especializando em Desenvolvimento Front-end.
        </p>
      </div>
    </section>
  )
}

export default Home