import useFlagEmojiToPNG from "../hooks/useFlagEmojiToPng";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const flagEmoji = useFlagEmojiToPNG(country.emoji);

  return (
    <li className={styles.countryItem}>
      <span> {flagEmoji} </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
