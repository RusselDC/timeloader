import React from 'react';
import type { FieldInputProps } from 'formik';

interface CustomInputProps {
  field: FieldInputProps<unknown>;
  onChange: (e: React.ChangeEvent<unknown>) => void;
  render?: React.ComponentType<Record<string, unknown>>;
}

const CustomInput: React.FC<CustomInputProps> = ({ field, onChange, render: CustomComponent }) => {
  if (!CustomComponent) return null;
  return <CustomComponent {...field} onChange={onChange} />;
};

export default CustomInput;
