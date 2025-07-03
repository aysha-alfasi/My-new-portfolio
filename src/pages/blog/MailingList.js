import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "./MailingList.css";
import cuteMail from "../../imgs/message2.png";

const MailingList = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please enter your email address 🌸",
        confirmButtonColor: "#f48fb1",
      });
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Subscribed!",
          text: "You're in! Expect lovely things 💌",
          confirmButtonColor: "#f48fb1",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "There was an error. Please try again later.",
        confirmButtonColor: "#f48fb1",
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
