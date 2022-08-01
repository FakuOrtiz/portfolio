import React from "react";
import styles from "./Projects.module.css";
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

        </div>
      </div>
    </div>
  );
};

export default Projects;
