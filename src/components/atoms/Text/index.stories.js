import styled from 'styled-components/native';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import {
  Title,
  CardDescription,
  CardHightLightText,
  CardTitle,
  DetailTitle,
  DetailSubTitle,
  DetailText,
  DetailSectionTitle,
  InputLabel,
} from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Text', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);
stories.add('Title', () => {
  const value = text('Text', 'Exemple text');
  return <Title>{value}</Title>;
});

stories.add('CardTitle', () => {
  const value = text('CardTitle', 'Exemple Title');
  return <CardTitle>{value}</CardTitle>;
});

stories.add('CardDescription', () => {
  const value = text('CardDescription', 'Exemplo de Destaque');
  return <CardDescription>{value}</CardDescription>;
});

stories.add('CardHightLightText', () => {
  const value = text('CardHightLightText', 'US$ 222.22');
  return <CardHightLightText>{value}</CardHightLightText>;
});

stories.add('DetailTitle', () => {
  const value = text('DetailTitle', 'Detalhe de Titulo');
  return <DetailTitle>{value}</DetailTitle>;
});

stories.add('DetailSubTitle', () => {
  const value = text('DetailSubTitle', 'Detalhes Subtitulo');
  return <DetailSubTitle>{value}</DetailSubTitle>;
});

stories.add('DetailText', () => {
  const value = text('DetailText', 'Text Detalhe');
  return <DetailText>{value}</DetailText>;
});

stories.add('DetailSectionTitle', () => {
  const value = text('DetailSectionTitle', 'Secao titulo');
  return <DetailSectionTitle>{value}</DetailSectionTitle>;
});
stories.add('InputLabel', () => {
  const value = text('InputLabel', 'input label');
  return <InputLabel>{value}</InputLabel>;
});
