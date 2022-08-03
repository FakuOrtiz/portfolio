import React from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  let sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_d4x12eo",
        "template_mckex7b",
        e.target,
        "jlpUDMUtzoyT7j6o4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="seccion5" className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.containerAll}>
          <div className={styles.titleContainer}>
            <h2>Contacto</h2>
            <div className={styles.line}></div>
          </div>
          <div>
            <form onSubmit={(e) => sendEmail(e)}>
              <div className={styles.containerNameMail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className={styles.inputDoble}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.inputDoble}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  className={styles.input}
                />
              </div>
              <div>
                <textarea name="message" placeholder="Mensaje"></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Enviar mensaje"
                  className={styles.submit}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
