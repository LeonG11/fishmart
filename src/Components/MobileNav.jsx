import MediaQuery from "react-responsive";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Basket } from "../img/basket.svg";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as User } from "../img/user.svg";
import Dot from "../Components/Dot";

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  const styles = {
    header: {
      width: "auto",
      height: "6.875rem",
      backgroundColor: "#051B26",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      marginLeft: "1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "1rem",
      color: "#B78A61",
      fontWeight: "400",
    },
    blockLinks: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    blockButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    svg: {
      marginRight: "2rem",
    },
    buttonBurger: {
      marginLeft: "1.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    burgerBox: {
      width: "1.5rem",
      height: "0.125rem",
      backgroundColor: "#B78A61",
      marginTop: "0.4rem",
    },
    alignItems: {
      display: "flex",
      alignItems: "center",
    },
    link: {
      fontSize: "1.5rem",
      paddingTop: "1.5rem",
      color: "white",
      fontWeight: "400",
    },
    dot: {
      width: "0.25rem",
      height: "0.25rem",
      backgroundColor: "white",
      borderRadius: "50%",
      marginTop: "1.5rem",
    },
  };
  return (
    <MediaQuery maxWidth={768}>
      <header style={styles.header}>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/fishfish" style={styles.link}>
            КОНТАКТЫ
          </Link>
          <div style={styles.dot} />
          <Link to="/menu" style={styles.link}>
            АССОРТИМЕНТ
          </Link>
          <div style={styles.dot} />
          <Link to="/about" style={styles.link}>
            КОНТАКТЫ
          </Link>
        </div>
        {menuOpen && <div className="menu-backdrop" onClick={toggleMenu} />}
        <div style={styles.alignItems}>
          <button style={styles.buttonBurger} onClick={toggleMenu}>
            <div style={styles.burgerBox} />
            <div style={styles.burgerBox} />
            <div style={styles.burgerBox} />
          </button>
          <Link to="/" style={styles.logo}>
            <Logo />
            <div>FISH FISH</div>
          </Link>
        </div>
        <div style={styles.blockButton}>
          <User className="up" style={styles.svg} />
          <Basket className="up" style={styles.svg} />
        </div>
      </header>
    </MediaQuery>
  );
}
