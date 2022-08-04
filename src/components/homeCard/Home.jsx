import React from "react";
import styles from "./Home.module.css";
import Mail from "../../svg/Mail";
import Download from "../../svg/Download";
import cv from "../../assets/Facundo Ortiz - CV.pdf";

const Home = () => {
  return (
    <div className={styles.containerBig}>
      <div id="home" className={styles.containerCard}>
        <div className={styles.card}>
          <div className={styles.containerAll}>
            <div className={styles.containerName}>
              <h1 className={styles.title}>
                ¡Hola! soy Facundo Ortiz<span className={styles.punto}>.</span>
              </h1>
              <p className={styles.subtitle}>
                Desarrollador web apasionado por la tecnología. Me encanta el
                Front-end.
              </p>
              <div className={styles.containerCVMail}>
                <div>
                  <a href={cv} download className={styles.linkDownload}>
                    <div className={styles.containerDownload}>
                      <div style={{ width: "20px" }}>
                        <Download />
                      </div>
                      <div>
                        <p style={{ marginLeft: "10px" }}>Descargar CV</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:facundoagustinortiz@gmail.com"
                    className={styles.linkMail}
                  >
                    <div className={styles.containerMail}>
                      <div style={{ width: "20px" }}>
                        <Mail />
                      </div>
                      <div>
                        <p style={{ paddingLeft: "10px" }}>¡Contáctame!</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
