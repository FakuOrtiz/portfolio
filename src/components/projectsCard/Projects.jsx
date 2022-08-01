import React from "react";
import styles from "./Projects.module.css";
import scriptMusic from "../../assets/ScriptMusic.jpg";
import appemon from "../../assets/APPemon.jpeg";
import rickAndMorty from "../../assets/RickAndMortyApp.jpeg";
import GitHub from "../../svg/GitHubBlack";
import Deploy from "../../svg/Deploy";

const Projects = () => {
  return (
    <div id="seccion4" className={styles.containerCard}>
      <div className={styles.card}>
        <div>
          <div className={styles.titleContainer}>
            <h2>Proyectos</h2>
            <div className={styles.line}></div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={styles.containerScript}>
              <p>Script-Music</p>
              <div>
                <img
                  src={scriptMusic}
                  alt="ScriptMusic"
                  className={styles.scriptMusic}
                  onMouseOver={() => setScriptHover(true)}
                  onMouseOut={() => setScriptHover(false)}
                />
                <div className={styles.containerGitDeploy}>
                  <a
                    href="https://github.com/JaluGJ/ScriptMusic"
                    target="_blank"
                  >
                    <div style={{ width: "30px" }}>
                      <GitHub />
                    </div>
                  </a>
                  <a
                    href="https://mega.nz/file/yDYUwTYb#O6wwXOD-AttU_lwO4sa6Hz9LBInCJhjrQbJi1N__wmU"
                    target="_blank"
                  >
                    <div style={{ width: "30px" }}>
                      <Deploy />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.containerPokeRick}>
              <p>APPemon</p>
              <div style={{ display: "flex", marginBottom: "15px" }}>
                <img src={appemon} alt="APPemon" className={styles.appemon} />
                <div className={styles.containerGitDeployColumn}>
                  <a
                    href="https://github.com/FakuOrtiz/PI-Pokemon"
                    target="_blank"
                  >
                    <div style={{ width: "30px" }}>
                      <GitHub />
                    </div>
                  </a>
                  <a href="https://appemon.vercel.app/" target="_blank">
                    <div style={{ width: "30px" }}>
                      <Deploy />
                    </div>
                  </a>
                </div>
              </div>
              <p>Rick and Morty App</p>
              <div style={{ display: "flex", marginBottom: "2px" }}>
                <img
                  src={rickAndMorty}
                  alt="Rick and Morty App"
                  className={styles.rickAndMorty}
                />
                <div className={styles.containerGitDeployColumn}>
                  <a
                    href="https://github.com/FakuOrtiz/RickAndMortyApp"
                    target="_blank"
                  >
                    <div style={{ width: "30px" }}>
                      <GitHub />
                    </div>
                  </a>
                  <a
                    href="https://rickandmortyapp-chi.vercel.app/"
                    target="_blank"
                  >
                    <div style={{ width: "30px" }}>
                      <Deploy />
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

export default Projects;
