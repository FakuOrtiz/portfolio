import React from "react";
import styles from "./LeftCard.module.css";
import LinkedIn from "../../svg/LinkedIn";
import GitHub from "../../svg/GitHub";
import Download from "../../svg/Download";
import cv from "../../assets/Facundo Ortiz - CV.pdf";

const LeftCard = () => {
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.containerName}>
          <p className={styles.name}>Facundo Ortiz</p>
          <p className={styles.webDev}>WEB DEVELOPER</p>
        </div>
        <div className={styles.containerNavBar}>
          <div className={styles.containerNavBarSeccion}>
            <div className={styles.containerIco}>
              <i className="fa-solid fa-house"></i>
            </div>
            <p className={styles.navBarSeccionName}>Inicio</p>
          </div>
          <div className={styles.containerNavBarSeccion}>
            <div className={styles.containerIco}>
              <i className="fa-solid fa-user"></i>
            </div>
            <p className={styles.navBarSeccionName}>Sobre mí</p>
          </div>
          <div className={styles.containerNavBarSeccion}>
            <div className={styles.containerIco}>
              <i className="fa-solid fa-code"></i>
            </div>
            <p className={styles.navBarSeccionName}>Tecnologías</p>
          </div>
          <div className={styles.containerNavBarSeccion}>
            <div className={styles.containerIco}>
              <i className="fa-solid fa-file"></i>
            </div>
            <p className={styles.navBarSeccionName}>Proyectos</p>
          </div>
          <div className={styles.containerNavBarSeccion}>
            <div className={styles.containerIco}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <p className={styles.navBarSeccionName}>Contacto</p>
          </div>
          <div className={styles.containerRedes}>
            <a
              href="https://www.linkedin.com/in/facundo-agustin-ortiz-gomez/"
              target="_blank"
            >
              <div style={{ width: "35px" }}>
                <LinkedIn />
              </div>
            </a>
            <a href="https://github.com/FakuOrtiz" target="_blank">
              <div style={{ width: "35px", marginLeft: "10px" }}>
                <GitHub />
              </div>
            </a>
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
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
