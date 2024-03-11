import React, {ComponentType, FC, useRef, useState} from 'react';
import { ControlProps, InputProps } from 'react-select';
import { FLAG_ICON_BASE_URL } from '../../config';

export const CountryInput: ComponentType<
  ControlProps<{ value: string; label: string }>
> = ({ isFocused, ...props }) => {
  const value = props.getValue()[0].value;
  const flagUrl = `${FLAG_ICON_BASE_URL}${value}.svg`;
 
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0px 5px 0px 10px",
        border: `${isFocused ? "2px" : "1px"} solid ${
          isFocused ? "#007FFF" : "#CECECE"
        }`,
        borderRadius: "4px",
      }}
    >
      {flagUrl && (
        <img src={flagUrl} alt={value} style={{ width: 20, marginRight: 10 }} />
      )}
      {props.children}
    </div>
  );
};