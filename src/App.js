import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import FetchApi from "./api";

function App() {
  const dataApi = FetchApi();

  return (
    <div className={styles.container}>
      <Cards data={dataApi} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
