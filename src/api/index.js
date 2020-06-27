import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const FetchApi = () => {
  const [state, setData] = useState({
    confirmed: {},
    recovered: {},
    deaths: {},
    lastUpdate: "",
  });

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const { confirmed, recovered, deaths, lastUpdate } = data;
        setData({ confirmed, recovered, deaths, lastUpdate });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return state;
};

export const FetchDailyData = () => {
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/daily`)
      .then(({ data }) => {
        const modifiedData = data.map((dailyData) => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate,
        }));
        setDaily(modifiedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return daily;
};

export const FetchCountries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/countries`)
      .then(({ data }) => {
        const { countries } = data;
        const modifiedData = countries.map((country) => country.name);
        setCountry(modifiedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCountry]);

  return country;
};
