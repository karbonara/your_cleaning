import * as React from 'react';
import ruLocale from 'date-fns/locale/ru';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import "./Calendar.scss";
const localeMap = {
    ru: ruLocale,
};

export default function LocalizedDatePicker() {
    const [locale, setLocale] = React.useState('ru');
    // const [datePickerValue, setDatePickerValue] = React.useState(new Date());
    const [value, setValue] = React.useState(() => new Date());
    return (
        <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={localeMap[locale]}
        >
            <StaticDatePicker
                onChange={(newValue) => setValue(newValue)}
                value={value}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
