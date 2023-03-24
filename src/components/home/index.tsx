import './home.css'

import htmlIcon from '../../assets/img/icons/html5.svg'
import cssIcon from '../../assets/img/icons/css3.svg'
import jsIcon from '../../assets/img/icons/javascript.svg'
import tsIcon from '../../assets/img/icons/typescript.svg'
import reactIcon from '../../assets/img/icons/react.svg'

const Home = () => {
    return (
        <section className="home__container">
            <div>
                <h1>Front-end Developer</h1>
                <p>
                    Dolor proident ipsum non commodo culpa do. Magna nisi irure ea ipsum excepteur laboris velit dolore. Exercitation dolor velit id incididunt ullamco sint consequat labore.
                </p>
            </div>
            <div>
                <img></img>
            </div>
            <div className="tech__container">
                <h2>Tech Stack |</h2>
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