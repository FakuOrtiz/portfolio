import React from "react";
import styles from "./AboutMe.module.css";
import profile from "../../assets/profile.png";
import Download from "../../svg/Download";
import cv from "../../assets/Facundo Ortiz - CV.pdf";
import Mail from "../../svg/Mail";

const AboutMe = () => {
  return (
    <div className={styles.containerBig}>
      <div id="aboutMe" className={styles.containerCard}>
        <div className={styles.card}>
          <div className={styles.containerAll}>
            <div className={styles.titleContainer}>
              <h2>Sobre mí</h2>
              <div className={styles.line}></div>
            </div>
            <div className={styles.containerDescripMayor}>
              <img src={profile} alt="Facundo Ortiz" className={styles.image} />
              <div className={styles.containerDescrip}>
                <h2 style={{ marginBottom: "10px" }}>Soy...</h2>
                <p>
                  una persona responsable, organizada y con persistencia y
                  actitud para crecer día a día tanto profesional como
                  personalmente. Me adapto fácilmente a nuevos proyectos,
                  desafíos y/o tecnologías.
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
    </div>
  );
};

export default AboutMe;
