import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "./MailingList.css";
import cuteMail from "../../imgs/message2.png";
import flower from "../../imgs/small-flower.png";

const MailingList = () => {
  const [email, setEmail] = useState("");
  const [, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      html: `
        <span class="loading-flower">🌸</span>
        <p class="sending-text">Subscribing...</p>
      `,
      showConfirmButton: false,
      allowOutsideClick: false,
      background: "#fff0f7",
      color: "#2a2a2c",
      customClass: {
        popup: "loading-popup",
      },
      didOpen: () => {
        Swal.getPopup().style.overflow = "hidden";
      },
    });

    try {
      const response = await fetch("http://localhost:3001/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      await response.json();
      setIsLoading(false);
      Swal.close();

      if (response.ok) {
        Swal.fire({
          icon: false,
          html: `
            <div class="subscribed-modal-content">
              <img src="${flower}" class="subscribed-img" />
              <p class="subscribed-text">You're in! Expect lovely things 💌</p>
            </div>
          `,
          background: "#fff0f7",
          customClass: {
            confirmButton: "subscribed-btn",
            popup: "subscribe-popUp",
          },
        });
      } else if (response.status === 409) {
        Swal.fire({
          html: `
            <div class="subscribed-modal-content">
              <span class="emoji-container-sad">🐰</span>
              <p class="subscribed-text">This email is already in our list 😅</p>  
            </div>
          `,
          customClass: {
            confirmButton: "subscribed-btn",
            popup: "subscribe-popUp-warning-2",
          },
        });
      } else {
        Swal.fire({
          icon: false,
          html: `
            <div class="emoji-container-sad">🐰</div>
            <p>Something went wrong 😕 Please try again soon</p>
          `,
          showConfirmButton: true,
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "subscribed-btn",
            popup: "subscribe-popUp-warning-2",
          },
        });
      }
    } catch (error) {
      setIsLoading(false);
      Swal.close();
      console.error("Error:", error);

      Swal.fire({
        icon: false,
        html: `
          <div class="emoji-container-sad">🐰</div>
          <p>Something went wrong 😕 Please try again soon</p>
        `,
        showConfirmButton: true,
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "subscribed-btn",
          popup: "subscribe-popUp-warning-2",
        },
      });
    }

    setEmail("");
  };

  return (
    <section className="mailing-section">
      <div className="content-of-mailing-list">
        <motion.img
          src={cuteMail}
          alt="Cute mail animation"
          className="mailing-img"
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 1.1, 1, 1.05, 1] }}
          transition={{
            duration: 1.7,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
          }}
        />

        <div className="subscribe-info">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span>S</span>ubscribe and receive the cuteness
            <span className="mail-flower">🌸</span>
          </motion.p>
        </div>
        <form className="mailing-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default MailingList;
