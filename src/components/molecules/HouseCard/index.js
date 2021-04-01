import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  CardContainer,
  CardImage,
  TextContainerLeft,
  TextContainer,
  TextContainerRight,
} from './styles';
import { CardTitle, CardHightLightText, CardDescription } from '../../atoms';
import { useHousesStore } from '../../../services/stores';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigation = useNavigation();
  const { setSelectedHouse } = useHousesStore();

  //const formattedPrice = new Intl.NumberFormat('en-US', {
  // style: 'currency',
  //  currency: 'USD',
  //});

  const onClickItemContainer = () => {
    setSelectedHouse(item);
    navigation.navigate('Detail');
  };

  return (
    <CardContainer onPress={() => onClickItemContainer()}>
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
