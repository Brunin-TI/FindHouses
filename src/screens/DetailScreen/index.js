import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
  IconButton,
  DetailTitle,
  DetailSectionTitle,
  DetailText,
  DetailSubTitle,
  Loader,
  HouseFeatureCard,
} from '../../components';
import {
  ScreenContainer,
  ImageBackground,
  BottomScreenContainer,
  FeaturesContainer,
} from './style';
import { getHouseDetail } from '../../services/calls';
import { useHousesStore } from '../../services/stores';
import {
  getIfHouseIsFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/db';

export const DetailScreen = ({ navigation }) => {
  const { selectedHouse } = useHousesStore();
  const [favorite, setFavorite] = useState();
  const [loading, setLoading] = useState(true);
  const [houseDetail, setHouseDetail] = useState();

  const callGetHouseDetail = async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    console.log({ result });
    setHouseDetail(result.properties[0] ? result.properties[0] : null);
    setLoading(false);
  };

  const checkIfHouseIsFavorite = async () => {
    const isFavorite = await getIfHouseIsFavorite(selectedHouse.property_id);
    setFavorite(isFavorite);
  };

  const saveFavoriteHouse = async () => {
    if (favorite) {
      await removeHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel removido como favorito com sucesso!');
      setFavorite(false);
    } else {
      await saveHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Imóvel salvo como favorito com sucesso!');
      setFavorite(true);
    }
  };

  useEffect(() => {
    callGetHouseDetail();
    checkIfHouseIsFavorite();
  }, []);

  const onClickArrowBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: selectedHouse.photos[0].href }}>
        <IconButton
          onPress={onClickArrowBack}
          iconName="chevron-back"
          transparent
        />
        <IconButton
          onPress={saveFavoriteHouse}
          iconName={favorite ? 'star' : 'star-outline'}
          transparent
          fill={favorite}
        />
      </ImageBackground>
      {loading ? (
        <BottomScreenContainer>
          <Loader />
        </BottomScreenContainer>
      ) : (
        <BottomScreenContainer>
          <DetailTitle>{houseDetail.address.line}</DetailTitle>
          <DetailSubTitle>
            U$ {houseDetail.community.price_max.toFixed(2)}
          </DetailSubTitle>
          <DetailText>{`${houseDetail.address.neighborhood_name} - ${houseDetail.address.state}`}</DetailText>
          <DetailSectionTitle mt={24} mb={12}>
            Detalhes
          </DetailSectionTitle>
          <FeaturesContainer>
            <HouseFeatureCard
              iconLib="materialcommunity"
              iconName="arrow-collapse-all"
              featureText={`${houseDetail.lot_size.size} ${houseDetail.lot_size.units}`}
            />
            <HouseFeatureCard
              iconLib="materialcommunity"
              iconName="bed-king-outline"
              featureText={`${houseDetail.community.beds_min} - ${houseDetail.community.beds_max} beds`}
            />
            <HouseFeatureCard
              iconLib="fontawesome"
              iconName="bath"
              featureText={`${houseDetail.community.baths_min} - ${houseDetail.community.baths_max} baths`}
            />
          </FeaturesContainer>

          <DetailSectionTitle mt={24} mb={12}>
            Vantagens do Imóvel
          </DetailSectionTitle>
          {houseDetail.features[1].text.map(item => (
            <DetailText mb={2} key={item}>
              -{item}
            </DetailText>
          ))}
        </BottomScreenContainer>
      )}
    </ScreenContainer>
  );
};
