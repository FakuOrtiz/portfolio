import React from 'react'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div id='seccion1' className={styles.containerCard}>
        <div className={styles.card}>
            <div className={styles.containerName}>
                <h1 className={styles.title}>¡Hola! soy Facundo Ortiz</h1>
                <p className={styles.subtitle}>Desarrollador web apasionado por la tecnología. Me encanta el front-end.</p>
            </div>
        </div>
    </div>
  )
}

export default Home