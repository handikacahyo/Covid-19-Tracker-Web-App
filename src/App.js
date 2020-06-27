import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

function App() {
  const [state, setdata] = useState({});
  const fetch = fetchData();

  useEffect(() => {
    async function fetchApi() {
      const fetchData = await fetch;

      setdata({ data: fetchData });
    }
    fetchApi();
  }, []);

  const { data } = state;

  return (
    <div className={styles.container}>
      <Cards covidData={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
