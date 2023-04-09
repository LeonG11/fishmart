import React from "react";
import { Link } from "react-router-dom";

export const LinkNav = (props) => {
  const styles = {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "400",
    lineHeight: "1.69rem",
    alignItems:'center',
  };
  return (
    <Link to={props.links}  style={styles}>
      <div className="up">{props.text}</div>
    </Link>
  );
};

export default LinkNav;
