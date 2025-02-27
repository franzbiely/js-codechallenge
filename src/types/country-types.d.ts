export interface CountrySelectOptionInterface {
  value: string;
  label: string;
}
export interface Country {
  code: string;
  name: string;
}

export interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
}