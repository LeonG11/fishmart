import MediaQuery from "react-responsive";
import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { Dot } from "../Components/Dot";
import { LinkNav } from "../Components/LinkNav";
import { ReactComponent as User } from "../img/user.svg";
import { ReactComponent as Basket } from "../img/basket.svg";
import { Link } from "react-router-dom";

export function DesktopNav() {
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
      marginLeft: "4rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "1.5rem",
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
      marginRight: "60px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    svg: {
      marginRight: "2rem",
    },
  };
  return (
    <MediaQuery minWidth={768}>
      <header style={styles.header}>
        <Link to="/" style={styles.logo}>
          <Logo />
          <div>FISH FISH</div>
        </Link>
        <div style={styles.blockLinks}>
          <LinkNav links="/fishfish" text="FISH FISH" />
          <Dot />
          <LinkNav links="/menu" text="АССОРТИМЕНТ" />
          <Dot />
          <LinkNav links="/about" text="КОНТАКТЫ" />
        </div>
        <div style={styles.blockButton}>
          <User className="up" style={styles.svg} />
          <Basket className="up" style={styles.svg} />
        </div>
      </header>
    </MediaQuery>
  );
}
