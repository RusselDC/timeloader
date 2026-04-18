import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import type { FieldInputProps, FieldMetaProps } from 'formik';
import * as Yup from 'yup';
import { Box } from '@mui/material';
import type { SxProps } from '@mui/material';
import { TextInput, NumberInput, PasswordInput, CheckboxInput, RadiobuttonInput, CustomInput } from './InputComponents';
import type { FieldConfig } from './types';

interface FormBuilderProps {
  fields: FieldConfig[];
  initialValues?: Record<string, unknown>;
  onSubmit: (values: Record<string, unknown>) => void;
  containerSx?: SxProps;
}

const FormBuilder: React.FC<FormBuilderProps> = ({ fields, initialValues, onSubmit, containerSx = { display: 'flex', flexDirection: 'column' } }) => {
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({});

  const schema = Yup.object(
    Object.fromEntries(fields.map(f => [f.name, f.validation]))
  );

  const defaultInitial = Object.fromEntries(
    fields.map(f => [f.name, f.type === 'checkbox' ? false : f.type === 'radiobutton' ? (f.options?.[0] || '') : ''])
  );

  const vals = { ...defaultInitial, ...initialValues };

  const renderField = (fieldConfig: FieldConfig) => {
    return (
      <Field name={fieldConfig.name}>
        {({ field, meta }: { field: FieldInputProps<unknown>; meta: FieldMetaProps<unknown> }) => {
          const handleChange = (e: React.ChangeEvent<unknown>) => {
            field.onChange(e);
            fieldConfig.customOnChange?.(e);
          };
          switch (fieldConfig.type) {
            case 'text':
              return <TextInput field={field} meta={meta} label={fieldConfig.label} onChange={handleChange} />;
            case 'number':
              return <NumberInput field={field} meta={meta} label={fieldConfig.label} onChange={handleChange} />;
            case 'password': {
              const showPassword = showPasswords[fieldConfig.name] || false;
              return <PasswordInput field={field} meta={meta} label={fieldConfig.label} onChange={handleChange} showPassword={showPassword} onToggle={() => setShowPasswords(prev => ({ ...prev, [fieldConfig.name]: !prev[fieldConfig.name] }))} />;
            }
            case 'checkbox':
              return <CheckboxInput field={field} label={fieldConfig.label} onChange={handleChange} />;
            case 'radiobutton':
              return <RadiobuttonInput field={field} label={fieldConfig.label} onChange={handleChange} options={fieldConfig.options || []} />;
            case 'custom':
              return <CustomInput field={field} onChange={handleChange} render={fieldConfig.render} />;
            default:
              return null;
          }
        }}
      </Field>
    );
  };

  return (
    <Formik initialValues={vals} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Box sx={containerSx}>
          {fields.map(fieldConfig => (
            <div key={fieldConfig.name}>{renderField(fieldConfig)}</div>
          ))}
        </Box>
      </Form>
    </Formik>
  );
};

export default FormBuilder;
