import countries from "i18n-iso-countries";
import { useState } from "react";
import Select from "react-select";
import { DEFAULT_COUNTRY } from "../../config";
import { Country, CountrySelectOptionInterface, CountrySelectProps } from "../../types/country-types";
import { CountryInput } from "./CountryInput";
import { CountrySelectOption } from "./CountrySelectOption";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const COUNTRIES_VALUE_KEY = 0;
const COUNTRIES_LABEL_KEY = 1;

export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  
  const arrCountry = Object.entries(
    countries.getNames("en", { select: "official" })
  );
  const data: CountrySelectOptionInterface[] = arrCountry.map((country) => {
    
    return {
      value: country[COUNTRIES_VALUE_KEY],
      label: country[COUNTRIES_LABEL_KEY],
    }
  })
  const defaultValue = { value: value.code, label: value.name };
  
  return (
    <div className="section">
      <label>
        Country
        <Select
          openMenuOnClick
          options={data}
          components={{ 
            Option: CountrySelectOption,
            Control: CountryInput
          }}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            const newCountry: Country = {
              code: (newValue as CountrySelectOptionInterface)?.value,
              name: (newValue as CountrySelectOptionInterface)?.label
            }
            if(newValue!==null) {
              onChange?.(newCountry);
            }
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
