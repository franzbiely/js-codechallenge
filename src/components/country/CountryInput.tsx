import React, {ComponentType, FC, useRef, useState} from 'react';
import { ControlProps, InputProps } from 'react-select';
import { FLAG_ICON_BASE_URL } from '../../config';

export const CountryInput: ComponentType<ControlProps<{ value: string, label: string }>> = (props) => {
    const value = props.getValue()[0].value;
    const flagUrl = `${FLAG_ICON_BASE_URL}${value}.svg`;
    
    return (
        <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}>
            {flagUrl && <img src={flagUrl} alt={value} style={{ width: 20, marginRight: 10 }} />}
            {props.children}
        </div>
    )
}