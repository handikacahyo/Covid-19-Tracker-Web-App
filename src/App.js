import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { FetchApi, FetchDailyData, FetchCountries } from "./api";

function App() {
  const dataApi = FetchApi();
  const dailyData = FetchDailyData();
  const countries = FetchCountries();

  const country = "";

  const handleChange = (country) => {
    console.log(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={dataApi} />
      <CountryPicker pick={countries} handleCountryChange={handleChange} />
      <Chart daily={dailyData} />
    </div>
  );
}

export default App;
