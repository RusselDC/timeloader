import * as Yup from 'yup';
import React from 'react';

export interface FieldConfig {
  name: string;
  label: string;
  customOnChange?: (e: React.ChangeEvent<unknown>) => void;
  validation: Yup.AnySchema;
  type: 'text' | 'number' | 'password' | 'checkbox' | 'radiobutton' | 'custom';
  render?: React.ComponentType<Record<string, unknown>>;
  options?: string[];
}
