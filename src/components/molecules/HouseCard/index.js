import React from 'react';
import {
  CardContainer,
  CardImage,
  TextContainerLeft,
  TextContainer,
  TextContainerRight,
} from './styles';
import { CardTitle, CardHightLightText, CardDescription } from '../../atoms';

export const HouseCard = ({ imgSource, title, description, price }) => {
  //const formattedPrice = new Intl.NumberFormat('en-US', {
  // style: 'currency',
  //  currency: 'USD',
  //});

  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHightLightText>U$ {Number(price).toFixed(2)}</CardHightLightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
