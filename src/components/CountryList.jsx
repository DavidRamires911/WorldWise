import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";


function CountryList({ cities, isLoading }) {

  console.log(cities);
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message message="Add Your first city by clicking on a city on the map" />
    );



  const uniqueCountries = new Set();
  const countries = [];

  cities.forEach((city) => {
    if (!uniqueCountries.has(city.country)) {
      uniqueCountries.add(city.country);
      countries.push({ country: city.country, emoji: city.emoji });
    }
  });
 

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}
         />
      ))}
    </ul>
  );
}

export default CountryList;
