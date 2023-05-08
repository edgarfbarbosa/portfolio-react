import styles from './skills.module.css'

import htmlIcon from '../../assets/img/icons/html5.svg'
import cssIcon from '../../assets/img/icons/css3.svg'
import jsIcon from '../../assets/img/icons/javascript.svg'
import tsIcon from '../../assets/img/icons/typescript.svg'
import reactIcon from '../../assets/img/icons/react.svg'

const Skills = () => {
  return (
    <section>
      <div className={styles.tech__container}>
        <h3>Tech Stack |</h3>
        <div>
          <img src={htmlIcon} className={styles.tech__icon}></img>
          <img src={cssIcon} className={styles.tech__icon}></img>
          <img src={jsIcon} className={styles.tech__icon}></img>
          <img src={tsIcon} className={styles.tech__icon}></img>
          <img src={reactIcon} className={styles.tech__icon}></img>
        </div>
      </div>
    </section>
  )
}

export default Skills