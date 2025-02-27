import ISO_6391_Languages from "iso-639-1";

import Select from "react-select";
import { LanguageSelectProps } from "../../types/language-types";


// Constants
export const DEFAULT_LANGUAGE = "English - English";

// Component
const LanguageSelect = ({
  language = DEFAULT_LANGUAGE,
  onChange,
}: LanguageSelectProps) => {
  // Prepare data
  const data = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
    "es",
  ]).map(({ name, nativeName }) => {
    return {
      value: name + " - " + nativeName,
      label: name + " - " + nativeName,
    };
  });
  const defaultValue = { value: language, label: language };

  // Render
  return (
    <div className="section">
      <label>
        Language
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if(newValue!==null) {
              onChange?.(newValue.value)}
            }
          }
        />
      </label>
    </div>
  );
};

export default LanguageSelect;
