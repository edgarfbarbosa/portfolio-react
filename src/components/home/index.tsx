import './home.css'

import profilePhoto from '../../assets/img/profile.jpeg'

const Home = () => {
    return (
        <section className="home__container">
            {/* <div className="img__container">
                <img src={profilePhoto} className="img__photo"></img>
            </div> */}
            <div className="home__content">
                <h1 className="home__title">Edgar Faria Barbosa</h1>
                <h2 className="home__subtitle">Front-end Developer</h2>
                <p>
                    Sou estudante de Engenharia de Software e estou me especializando em Desenvolvimento Front-end.
                </p>
            </div>
            <div>
                <button>Currículo</button>
            </div>
        </section>
    )
}

export default Home