import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "../component_css/Header.module.css";

function Header() {
  return (
    <div
      style={{
        padding: "15px 0px",
      }}
    >
      <Container>
        <h1 className={styles.heading}>
          <Link to="/"> Movies</Link>
        </h1>
      </Container>
    </div>
  );
}

export default Header;
