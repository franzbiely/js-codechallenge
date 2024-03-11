import { DEFAULT_CURRENCY } from "./components/currency/CurrencySelect";
import { DEFAULT_LANGUAGE } from "./components/language/LanguageSelect";
import { FormDataInterface } from "./types/settings-types";
export const DEFAULT_COUNTRY = {
    code: "US",
    name: "United States of America",
  };
export const FLAG_ICON_BASE_URL = 'https://catamphetamine.gitlab.io/country-flag-icons/3x2/';

export const DEFAULT_FORM_DATA: FormDataInterface = {
    country: DEFAULT_COUNTRY,
    currency: DEFAULT_CURRENCY,
    language: DEFAULT_LANGUAGE,

    selectedCountry: DEFAULT_COUNTRY,
    selectedCurrency: DEFAULT_CURRENCY,
    selectedLanguage: DEFAULT_LANGUAGE
}
