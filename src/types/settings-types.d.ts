import { Country } from "./country-types";
export interface FormDataInterface {
  country: Country;
  currency: string;
  language: string;

  selectedCountry: Country;
  selectedCurrency: string;
  selectedLanguage: string;
}
