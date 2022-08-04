import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ innerRef }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    setInput({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    toast(
      `¡Gracias por escribirme, ${input.name}! Te responderé lo más pronto posible`,
      {
        icon: "😁",
      }
    );
  };

  return (
    <div ref={innerRef} className={styles.containerCard}>
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
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={styles.inputDoble}
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  className={styles.input}
                  onChange={(e) =>
                    setInput({ ...input, subject: e.target.value })
                  }
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  onChange={(e) =>
                    setInput({ ...input, message: e.target.value })
                  }
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  disabled={
                    !input.name ||
                    !input.email ||
                    !input.message ||
                    !input.subject
                  }
                  value="Enviar mensaje"
                  className={
                    !input.name ||
                    !input.email ||
                    !input.message ||
                    !input.subject
                      ? styles.submitDisabled
                      : styles.submit
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
