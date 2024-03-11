import React from "react";
import { useRef } from "react";
import { Country } from "../../types/country-types";

interface SettingsButtonProps {
    handleOpen: () => void; // Specify the function type with a void return
    country: Country; 
    currency: string; 
    language:string;
  }
const SettingsButton: React.FC<SettingsButtonProps> = ({ handleOpen, country, currency, language }) => {
  
    // Render Counter
    const counter = useRef(0);
  
    // Increase render count.
    counter.current++;
  
    // Log current render count.
    console.log("Render count of button is: " + counter.current);
  
    return (
      <button onClick={handleOpen}>
        {country.name} - ({currency} - {language})
      </button>
    );
  };
  export default React.memo(SettingsButton)