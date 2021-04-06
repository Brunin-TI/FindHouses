import React from 'react';
import { InputLabel } from '../../atoms';
import { InputText, InputContainer } from './style';

export const Input = props => {
  const { placeholder, label } = props;
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        {...props}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
    </InputContainer>
  );
};
