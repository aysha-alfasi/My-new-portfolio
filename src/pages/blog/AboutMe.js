import { useState } from "react";
import { TiArrowDownOutline } from "react-icons/ti";
/* import Me from "../assests/imgs/m3.jpg"; */
import "./AboutMe.css";

function ToggleItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="toggle-item">
      <div
        className={`toggle-question ${isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <span className="toggle-icon">
          {isOpen ? "💬" : <TiArrowDownOutline className="toggle-icon" />}
        </span>
        {question}
      </div>
      <div className={`toggle-answer ${isOpen ? "show fade-in" : ""}`}>
        {answer}
      </div>
    </div>
  );
}

function AboutMe() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggles = [
    {
      question: "Some fun facts",
      answer:
        "My name is Aisha, Ayshona, Anoo, Shona, Ashu-mshu, etc.. And my nickname is sunshine. ✨",
    },
    {
      question: "Some sweet facts",
      answer:
        "my official name accurately means A female who lives a happy live.🌿",
    },
    {
      question: "Some serious facts",
      answer:
        "I work for what aligns with my principles and makes the world a better place. 👩🏻‍💻",
    },
    {
      question: "Personality facts",
      answer:
        "I am HSP person. HSP person is about experience emotions and sensory stimuli intensely. 🫧",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="about-me">
     
      <div className="about-intro">
        {/*
        <div className="img-button">
           <img src={Me} alt="Me" className="about-img" />
           <button className="button-link"> My ebooks</button>
        </div>
*/}
        <div className="about-text-and-toggles">
          <p className="about-text">
            I like to code
            and design useful and nice ideas 🎀, And I’m a writer{" "}
            <span className="pink-s">♥</span>. My native language is Arabic
            العربية
          </p>

          <p className="extra-facts">
            <span className="rotate">🌸</span>Curious? Here are more facts about
            me<span className="wiggle">💡</span>
          </p>

          <div className="toggle-section">
            {toggles.map((item, index) => (
              <ToggleItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
