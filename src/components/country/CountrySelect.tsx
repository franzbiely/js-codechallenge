import countries from "i18n-iso-countries";
import Select, { GroupBase, OptionProps } from "react-select";
import { CountrySelectOption } from "./CountrySelectOption";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const COUNTRIES_VALUE_KEY = 0;
const COUNTRIES_LABEL_KEY = 1;

interface Country {
  code: string;
  name: string;
}
interface CountrySelectOptionInterface {
  value: string;
  label: string;
}

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
}

export const DEFAULT_COUNTRY = {
  code: "US",
  name: "United States of America",
};

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
      label: country[COUNTRIES_LABEL_KEY]
    }
  })
  const defaultValue = { value: value.code, label: value.name };
  return (
    <div>
      <label>
        Country
        <Select
          options={data}
          components={{ Option: CountrySelectOption }}
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
