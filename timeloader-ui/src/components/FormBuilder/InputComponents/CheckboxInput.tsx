import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import type { FieldInputProps } from 'formik';

interface CheckboxInputProps {
  field: FieldInputProps<unknown>;
  label: string;
  onChange: (e: React.ChangeEvent<unknown>) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ field, label, onChange }) => (
  <FormControlLabel
    control={<Checkbox {...field} checked={field.value as boolean} onChange={onChange} />}
    label={label}
    sx={{ mb: 2 }}
  />
);

export default CheckboxInput;
