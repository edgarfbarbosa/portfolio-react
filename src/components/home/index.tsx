import './home.css'

import htmlIcon from '../../assets/img/icons/html5.svg'
import cssIcon from '../../assets/img/icons/css3.svg'
import jsIcon from '../../assets/img/icons/javascript.svg'
import tsIcon from '../../assets/img/icons/typescript.svg'
import reactIcon from '../../assets/img/icons/react.svg'

import profilePhoto from '../../assets/img/profile.jpeg'

const Home = () => {
    return (
        <section className="home__container">
            {/* <div className="img__container">
                <img src={profilePhoto} className="img__photo"></img>
            </div> */}
            <div className="home__content">
                <h1>Edgar Faria Barbosa</h1>
                <h2>Front-end Developer</h2>
                <p>
                    Sou estudante de Engenharia de Software e estou me especializando em Desenvolvimento Front-end.
                </p>
            </div>
            <div className="tech__container">
                <h3>Tech Stack |</h3>
                <div>
                    <img src={htmlIcon} className="tech__icon"></img>
                    <img src={cssIcon} className="tech__icon"></img>
                    <img src={jsIcon} className="tech__icon"></img>
                    <img src={tsIcon} className="tech__icon"></img>
                    <img src={reactIcon} className="tech__icon"></img>
                </div>
            </div>
        </section>
    )
}

export default Home