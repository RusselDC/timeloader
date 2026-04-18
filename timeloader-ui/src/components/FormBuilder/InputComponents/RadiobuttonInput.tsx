import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import type { FieldInputProps } from 'formik';

interface RadiobuttonInputProps {
  field: FieldInputProps<unknown>;
  label: string;
  onChange: (e: React.ChangeEvent<unknown>) => void;
  options: string[];
}

const RadiobuttonInput: React.FC<RadiobuttonInputProps> = ({ field, label, onChange, options }) => (
  <FormControl component="fieldset" sx={{ mb: 2 }}>
    <FormLabel>{label}</FormLabel>
    <RadioGroup {...field} value={field.value as string} onChange={onChange}>
      {options.map(option => (
        <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </FormControl>
);

export default RadiobuttonInput;
