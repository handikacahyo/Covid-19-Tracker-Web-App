import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchApi = () => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchDailyData = () => {
  return axios
    .get(`${url}/daily`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchCountries = () => {
  return axios
    .get(`${url}/countries`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
