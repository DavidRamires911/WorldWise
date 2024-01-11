import React from "react";
import styles from "./CityItem.module.css";
import { countryCodeEmoji } from "emoji-flags";
import { Link } from "react-router-dom";

const CityItem = ({ city }) => {
  const { date, cityName, emoji, id, position } = city;
  console.log(position);
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <img src={emoji} alt={cityName} width={30} height={20} />

        <h3 className={styles.name}>{cityName} </h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times; </button>
      </Link>
    </li>
  );
};

export default CityItem;
