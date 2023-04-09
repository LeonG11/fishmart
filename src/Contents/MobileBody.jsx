import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";

export function MobileBody() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      paddingTop: "2rem",
      paddingLeft: "1.5rem",
    },
    text: {
      flex: "0 0 auto",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: "500",
      color: "white",
    },
    assortiment: {
      paddingLeft: "1rem",
      fontSize: "1rem",
      fontWeight: "400",
      color: "white",
      marginRight: "1.25rem",
    },
    downText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  };
  return (
    <MediaQuery maxWidth={768}>
      <div style={styles.container}>
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
