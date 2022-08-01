import React from "react";
import styles from "./AboutMe.module.css";
import profile from "../../assets/profile.png";
import Download from "../../svg/Download";
import cv from "../../assets/Facundo Ortiz - CV.pdf";
import Mail from "../../svg/Mail";

const AboutMe = () => {
  return (
    <div id="seccion2" className={styles.containerCard}>
      <div className={styles.card}>
        <div style={{marginTop: "50px"}}>
          <div className={styles.titleContainer}>
            <h2>Sobre mí</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.containerDescripMayor}>
            <img src={profile} alt="Facundo Ortiz" className={styles.image} />
            <div className={styles.containerDescrip}>
              <h2 style={{ marginBottom: "10px" }}>Soy...</h2>
              <p>
                una persona responsable, comprometida y persistente. Disfruto
                enfrentarme a los desafíos que me impongo a mí mismo y lograr
                resolverlos con éxito. Formarme profesionalmente me motiva a
                seguir perfeccionando mis habilidades.
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
                        <p style={{ marginLeft: "10px" }}>¡Contáctame!</p>
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

export default AboutMe;
