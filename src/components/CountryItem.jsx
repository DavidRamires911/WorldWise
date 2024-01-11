import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  console.log("CountryItem - country:", country);

  return (
    <li className={styles.countryItem}>
      <span> <img src={country.emoji} alt="sdasd" /> </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
