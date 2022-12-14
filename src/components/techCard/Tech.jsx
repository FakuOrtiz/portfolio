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
import Git from "../../svg/tech/Git";
import Figma from "../../svg/tech/Figma";
import MySQL from "../../svg/tech/MySQL";
import Next from "../../svg/tech/Next";

const Tech = () => {
  return (
    <div className={styles.containerBig}>
      <div id="tech" className={styles.containerCard}>
        <div className={styles.card}>
          <div className={styles.containerAll}>
            <div className={styles.titleContainer}>
              <h2>Tecnologías</h2>
              <div className={styles.line}></div>
            </div>
            <div>
              <div>
                <div className={styles.containerSubtitle}>
                  <h2>Front End</h2>
                  <div className={styles.line2}></div>
                </div>
                <div className={styles.containerStack}>
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
                    <div style={{ width: "57px" }}>
                      <Reacts />
                    </div>
                    <p>React.js</p>
                  </div>
                  <div className={styles.containerTech}>
                    <div style={{ width: "57px" }}>
                      <Next />
                    </div>
                    <p>Next.js</p>
                  </div>
                  <div className={styles.containerTech}>
                    <div style={{ width: "57px" }}>
                      <Reacts />
                    </div>
                    <p>Native</p>
                  </div>
                  <div className={styles.containerTech}>
                    <div style={{ width: "53px" }}>
                      <Redux />
                    </div>
                    <p>Redux</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.containerSubtitle}>
                  <h2>Back End</h2>
                  <div className={styles.line2}></div>
                </div>
                <div className={styles.containerStack}>
                  <div className={styles.containerTech}>
                    <Node />
                    <p>Node.js</p>
                  </div>
                  <div className={styles.containerTech}>
                    <div>
                      <Express />
                    </div>
                    <p>Express.js</p>
                  </div>
                  <div className={styles.containerTech}>
                    <PostgreSQL />
                    <p>PostgreSQL</p>
                  </div>
                  <div className={styles.containerTech}>
                    <MySQL />
                    <p>MySQL</p>
                  </div>
                  <div className={styles.containerTech}>
                    <Sequelize />
                    <p>Sequelize</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.containerSubtitle}>
                  <h2>Otros</h2>
                  <div className={styles.line2}></div>
                </div>
                <div className={styles.containerStack}>
                  <div className={styles.containerTech}>
                    <Git />
                    <p>Git</p>
                  </div>
                  <div className={styles.containerTech}>
                    <Figma />
                    <p>Figma</p>
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

export default Tech;
