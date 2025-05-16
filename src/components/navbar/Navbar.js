import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <button onClick={() => scrollToSection("work")}>Work</button>
      <button onClick={() => scrollToSection("skills")}>Skills</button>
      <button onClick={() => scrollToSection("contact")}>Contact</button>
      <button onClick={() => scrollToSection("hero")}>Home</button>
    </nav>
  );
};

export default Navbar;
