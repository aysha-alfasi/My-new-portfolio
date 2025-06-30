import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import gitHub from "../../imgs/icons/gitHub.png";
import In from "../../imgs/icons/in.png";
import sending from "../../imgs/sending2.gif";

import "./ContactSection.css";

const ContactSection = () => {
  const [, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      html: `
    <img src="${sending}" class="sending" alt="Sending animation" />
  <p class="sending-text">Sending your message...</p>
  `,
      showConfirmButton: false,
      allowOutsideClick: false,
      background: "#b18edf",
      color: "#2a2a2c",
      customClass: {
        popup: "loading-popup",
      },
      didOpen: () => {
        Swal.getPopup().style.overflow = "hidden";
      },
    });
    try {
      const res = await fetch("http://localhost:3002/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      await res.json();

      if (res.ok) {
        setIsLoading(false);
        Swal.fire({
          icon: false,
          html: `
          <div class="emoji-container">🎉</div>
          <p>Your message is flying to my inbox🤩. I’ll reply soon 💌</p>
        `,
          showConfirmButton: true,
          confirmButtonText: "Ok",
          background: "#b18edf",
          customClass: {
            confirmButton: "conform-btn",
            popup: "custom-popup",
          },
        });

        setName("");
        setEmail("");
        setMessage("");
      } else {
        setIsLoading(false);
        Swal.fire({
          icon: false,
          html: `
          <div class="emoji-container-sad">😢</div>
          <p>Uh-oh! Message failed to send. Try again soon</p>
        `,
          showConfirmButton: true,
          confirmButtonText: "Ok",
          background: "#b18edf",
          customClass: {
            confirmButton: "conform-btn",
            popup: "custom-popup",
          },
        });
      }
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: false,
        html: `
        <div class="emoji-container-sad">😢</div>
        <p>Uh-oh! Message failed to send. Try again soon</p>
      `,
        showConfirmButton: true,
        confirmButtonText: "Ok",
        background: "#b18edf",
        customClass: {
          confirmButton: "conform-btn",
          popup: "custom-popup",
        },
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="stars-bg" />
      <h2
        className="contact-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Get In Touch
      </h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(255, 255, 255, 0)",
              "0 0 20px rgba(255, 255, 255, 0.4)",
              "0 0 0px rgba(255, 255, 255, 0)",
            ],
          }}
        >
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            className={name ? "filled" : ""}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(255, 255, 255, 0)",
              "0 0 20px rgba(255, 255, 255, 0.4)",
              "0 0 0px rgba(255, 255, 255, 0)",
            ],
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={email ? "filled" : ""}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(255, 255, 255, 0)",
              "0 0 20px rgba(255, 255, 255, 0.4)",
              "0 0 0px rgba(255, 255, 255, 0)",
            ],
          }}
        >
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={message ? "filled" : ""}
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Send Message
        </motion.button>
      </form>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} alt="github icon" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <img src={In} alt="LinkedIn icon" />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
