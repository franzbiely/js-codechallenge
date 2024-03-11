import CurrencyData from "currency-codes/data";
import Select from "react-select";
import { Currency, CurrencySelectOption } from "../../types/currency-types";

// Interfaces


// Props
interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: string) => void;
}

// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect = ({
  value = DEFAULT_CURRENCY,
  onChange,
}: CurrencySelectProps) => {
  // Prepare data
  const data: CurrencySelectOption[] = (CurrencyData as Currency[])
    .map(({ code, currency }) => {
      return {
        value: code + " - " + currency,
        label: code + " - " + currency,
      };
    });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            if(newValue!==null) {
              onChange?.(newValue.value);
            }
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
