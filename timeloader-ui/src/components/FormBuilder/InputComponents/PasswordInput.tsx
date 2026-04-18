import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import type { FieldInputProps, FieldMetaProps } from 'formik';

interface PasswordInputProps {
  field: FieldInputProps<unknown>;
  meta: FieldMetaProps<unknown>;
  label: string;
  onChange: (e: React.ChangeEvent<unknown>) => void;
  showPassword: boolean;
  onToggle: () => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ field, meta, label, onChange, showPassword, onToggle }) => (
  <TextField
    {...field}
    label={label}
    type={showPassword ? 'text' : 'password'}
    error={meta.touched && !!meta.error}
    helperText={meta.touched && meta.error}
    onChange={onChange}
    fullWidth
    sx={{ mb: 2 }}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={onToggle} edge="end">
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export default PasswordInput;
