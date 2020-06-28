import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountries()
        .then((data) => {
          const { countries } = data;
          const modifiedData = countries.map((country) => country.name);
          setCountry(modifiedData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [setCountry]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="global">Global</option>
          {country.map((singleCountry, i) => (
            <option key={i} value={singleCountry}>
              {singleCountry}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
