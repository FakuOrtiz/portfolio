import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./LeftCard.module.css";
import LinkedIn from "../../svg/LinkedIn";
import GitHub from "../../svg/GitHub";
import Download from "../../svg/Download";
import cv from "../../assets/Facundo Ortiz - CV.pdf";

const LeftCard = () => {
  const [active, setActive] = useState({
    home: false,
    about: false,
    tech: false,
    projects: false,
    contact: false,
  });
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.containerName}>
          <p className={styles.name}>Facundo Ortiz</p>
          <p className={styles.webDev}>WEB DEVELOPER</p>
        </div>
        <div>
          <Link
            className={
              active.home ? styles.prueba : styles.containerNavBarSeccion
            }
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={() =>
              setActive({
                home: true,
                about: false,
                tech: false,
                projects: false,
                contact: false,
              })
            }
          >
            <div className={styles.containerIco}>
              <i className="fa-solid fa-house"></i>
            </div>
            <p>Inicio</p>
          </Link>
          <Link
            className={
              active.about ? styles.prueba : styles.containerNavBarSeccion
            }
            to="aboutMe"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={() =>
              setActive({
                home: false,
                about: true,
                tech: false,
                projects: false,
                contact: false,
              })
            }
          >
            <div className={styles.containerIco}>
              <i className="fa-solid fa-user"></i>
            </div>
            <p>Sobre mí</p>
          </Link>
          <Link
            className={
              active.tech ? styles.prueba : styles.containerNavBarSeccion
            }
            to="tech"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={() =>
              setActive({
                home: false,
                about: false,
                tech: true,
                projects: false,
                contact: false,
              })
            }
          >
            <div className={styles.containerIco}>
              <i className="fa-solid fa-code"></i>
            </div>
            <p>Tecnologías</p>
          </Link>
          <Link
            className={
              active.projects ? styles.prueba : styles.containerNavBarSeccion
            }
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={() =>
              setActive({
                home: false,
                about: false,
                tech: false,
                projects: true,
                contact: false,
              })
            }
          >
            <div className={styles.containerIco}>
              <i className="fa-solid fa-file"></i>
            </div>
            <p>Proyectos</p>
          </Link>
          <Link
            className={
              active.contact ? styles.prueba : styles.containerNavBarSeccion
            }
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onSetActive={() =>
              setActive({
                home: false,
                about: false,
                tech: false,
                projects: false,
                contact: true,
              })
            }
          >
            <div className={styles.containerIco}>
              <i className="fa-solid fa-phone"></i>
            </div>
            <p>Contacto</p>
          </Link>
          <div className={styles.containerRedes}>
            <a
              href="https://www.linkedin.com/in/facundortiz/"
              target="_blank"
            >
              <div style={{ width: "35px" }}>
                <LinkedIn />
              </div>
            </a>
            <a href="https://github.com/FakuOrtiz" target="_blank">
              <div style={{ width: "35px" }}>
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
