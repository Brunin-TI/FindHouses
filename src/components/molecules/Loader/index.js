import React from 'react';
import { DetailText } from '../../atoms';
import { LoaderIndicator, LoaderContainer } from './styles';

export const Loader = ({ text }) => (
  <LoaderContainer>
    <LoaderIndicator size="large" color="white" />
    <DetailText>{text ? text : 'Loading...'}</DetailText>
  </LoaderContainer>
);
