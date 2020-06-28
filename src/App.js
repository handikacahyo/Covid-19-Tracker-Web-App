import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";

function App() {
  const country = "";

  const handleChange = (country) => {
    console.log(country);
  };

  return (
    <div className={styles.container}>
      <Cards />
      <CountryPicker handleCountryChange={handleChange} />
      <Chart />
    </div>
  );
}

export default App;
