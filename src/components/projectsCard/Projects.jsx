import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import GitHub from "../../svg/GitHubBlack";
import Deploy from "../../svg/Deploy";
import scriptMusic from "../../assets/scriptmusic.png";
import rickAndMorty from "../../assets/rickandmorty.png";
import appemon from "../../assets/appemon.png";

const Projects = ({ innerRef }) => {
  return (
    <div ref={innerRef} className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.containerAll}>
          <div className={styles.titleContainer}>
            <h2>Proyectos</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.containerProjects}>
            <div className={styles.containerScript}>
              <div>
                <h3>Script-Music</h3>
              </div>
              <div>
                <img
                  src={scriptMusic}
                  alt="ScriptMusic"
                  className={styles.scriptIMG}
                />
              </div>
              <div>
                <p>
                  Aplicación mobile nativa sobre venta de instrumentos
                  musicales.
                </p>
              </div>
              <div className={styles.containerGitHubDeploy}>
                <div className={styles.icon}>
                  <a
                    href="https://github.com/JaluGJ/ScriptMusic"
                    target="_blank"
                  >
                    <GitHub />
                  </a>
                </div>
                <div className={styles.icon}>
                  <a
                    href="https://mega.nz/file/yDYUwTYb#O6wwXOD-AttU_lwO4sa6Hz9LBInCJhjrQbJi1N__wmU"
                    target="_blank"
                  >
                    <Deploy />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.containerScript}>
              <div>
                <h3>APPemon</h3>
              </div>
              <div>
                <img src={appemon} alt="APPemon" className={styles.scriptIMG} />
              </div>
              <div>
                <p>
                  Aplicación web que permite ver, ordenar, filtrar, buscar y
                  crear pokémons.
                </p>
              </div>
              <div className={styles.containerGitHubDeploy}>
                <div className={styles.icon}>
                  <a
                    href="https://github.com/FakuOrtiz/PI-Pokemon"
                    target="_blank"
                  >
                    <GitHub />
                  </a>
                </div>
                <div className={styles.icon}>
                  <a href="https://appemon.vercel.app/" target="_blank">
                    <Deploy />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.containerScript}>
              <div>
                <h3>Rick and Morty App</h3>
              </div>
              <div>
                <img
                  src={rickAndMorty}
                  alt="Rick and Morty App"
                  className={styles.scriptIMG}
                />
              </div>
              <div>
                <p>
                  Aplicación web que permite ver y buscar personajes de Rick and
                  Morty.
                </p>
              </div>
              <div className={styles.containerGitHubDeploy}>
                <div className={styles.icon}>
                  <a
                    href="https://github.com/FakuOrtiz/RickAndMortyApp"
                    target="_blank"
                  >
                    <GitHub />
                  </a>
                </div>
                <div className={styles.icon}>
                  <a
                    href="https://rickandmortyapp-chi.vercel.app/"
                    target="_blank"
                  >
                    <Deploy />
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

export default Projects;
