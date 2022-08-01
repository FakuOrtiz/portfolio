import React from "react";
import HTML from "../../svg/tech/HTML";
import JavaScript from "../../svg/tech/JavaScript";
import Reacts from "../../svg/tech/Reacts";
import Redux from "../../svg/tech/Redux";
import CSS from "../../svg/tech/CSS";
import styles from "./Tech.module.css";
import Node from "../../svg/tech/Node";
import Express from "../../svg/tech/Express";
import PostgreSQL from "../../svg/tech/PostgreSQL";
import Sequelize from "../../svg/tech/Sequelize";

const Tech = () => {
  return (
    <div id="seccion3" className={styles.containerCard}>
      <div className={styles.card}>
        <div>
          <div className={styles.titleContainer}>
            <h2>Tecnologías</h2>
            <div className={styles.line}></div>
          </div>
          <div>
            <div>
              <div className={styles.containerSubtitle}>
                <h2>Fron-end</h2>
                <div className={styles.line2}></div>
              </div>
              <div className={styles.containerFront}>
                <div className={styles.containerTech}>
                  <JavaScript />
                  <p>JavaSript</p>
                </div>
                <div className={styles.containerTech}>
                  <HTML />
                  <p>HTML</p>
                </div>
                <div className={styles.containerTech}>
                  <CSS />
                  <p>CSS</p>
                </div>
                <div className={styles.containerTech}>
                  <Reacts />
                  <p>React</p>
                </div>
                <div className={styles.containerTech}>
                  <Reacts />
                  <p>Native</p>
                </div>
                <div className={styles.containerTech}>
                  <Redux />
                  <p>Redux</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.containerSubtitle}>
                <h2>Back-end</h2>
                <div className={styles.line2}></div>
              </div>
              <div className={styles.containerFront}>
                <div className={styles.containerTech}>
                  <Node />
                  <p>Node</p>
                </div>
                <div className={styles.containerTech}>
                  <div>
                    <Express />
                  </div>
                  <p>Express</p>
                </div>
                <div className={styles.containerTech}>
                  <PostgreSQL />
                  <p>PostgreSQL</p>
                </div>
                <div className={styles.containerTech}>
                  <Sequelize />
                  <p>Sequelize</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
