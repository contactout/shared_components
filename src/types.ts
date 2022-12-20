import React from 'react';

export interface SelectOptionType {
    label: string;
    value: any;
}

export interface SelectPropTypes {
    name: string;
    value: any;
    onChange: React.Dispatch<any>;
    options: SelectOptionType[];
    style?: object;
    error?: boolean;
}