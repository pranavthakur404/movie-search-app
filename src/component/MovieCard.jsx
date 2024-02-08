import React from "react";
import styles from "../component_css/MovieCard.module.css";
import { Link } from "react-router-dom";

function MovieCard({ Title, Poster, Type, Year, imdbID }) {
  return (
    <div className={styles.card}>
      <img src={Poster} alt={Title} />
      <p className={styles.title}>
        <Link to={`/detail/${imdbID}`}>
          {Title} <span className={styles.type}>({Type})</span>
        </Link>
      </p>
      <p className={styles.year}>{Year}</p>
    </div>
  );
}

export default MovieCard;
