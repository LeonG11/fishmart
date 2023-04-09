import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React  from "react";

export default function DesktopBody() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      paddingTop: "9.375rem",
      paddingLeft: "3.125rem",
    },
    text: {
      flex: "0 0 auto",
      fontSize: "4rem",
      lineHeight: "5.19rem",
      fontWeight: "700",
      color: "white",
    },
    assortiment: {
      paddingLeft: "3rem",
      fontSize: "1.625rem",
      fontWeight: "500",
      color: "white",
      marginRight: "2.5rem",
    },
    downText: {
      display: "flex",
      flexDirection: "row",
      paddingTop: "1.28rem",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  };
  return (
    <MediaQuery minWidth={768}>
      <div
        className="animate__animated animate__fadeInLeft"
        style={styles.container}
      >
        <div style={styles.text}>
          Cвежие морепродукты <br /> на любой вкус
        </div>
        <Link to="/menu" style={styles.downText}>
          <div style={styles.assortiment}>Смотреть ассортимент</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="40"
            viewBox="0 0 84 40"
            fill="none"
          >
            <circle cx="64" cy="20" r="20" fill="#B78A61" />
            <path d="M0 20.5H64" stroke="white" strokeWidth="2" />
            <path
              d="M54 9L64.0858 19.0858C64.8668 19.8668 64.8668 21.1332 64.0858 21.9142L54 32"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </Link>
      </div>
    </MediaQuery>
  );
}
