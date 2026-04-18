import React from 'react';
import { TextField } from '@mui/material';
import type { FieldInputProps, FieldMetaProps } from 'formik';

interface NumberInputProps {
  field: FieldInputProps<unknown>;
  meta: FieldMetaProps<unknown>;
  label: string;
  onChange: (e: React.ChangeEvent<unknown>) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ field, meta, label, onChange }) => (
  <TextField
    {...field}
    label={label}
    type="number"
    error={meta.touched && !!meta.error}
    helperText={meta.touched && meta.error}
    onChange={onChange}
    fullWidth
    sx={{ mb: 2 }}
  />
);

export default NumberInput;
