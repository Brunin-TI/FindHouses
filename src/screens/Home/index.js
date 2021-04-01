import React, { useEffect, useState } from 'react';
import {
  ScreenContainer,
  TopContainer,
  TitleContainer,
  ContentContainer,
} from './styles';
import { Title, IconButton, Input, HousesList, Loader } from '../../components';
import { getHousesCall } from '../../services/calls';
import { useHousesStore } from '../../services/stores';

export const HomeScreen = () => {
  const { housesList, setHouseList } = useHousesStore();
  const [loading, setLoading] = useState(true);
  //const [housesListData, setHousesListData] = useState([]);

  const callGetHouses = async () => {
    const result = await getHousesCall();
    setHouseList(result.properties ? result.properties : []);
    setLoading(false);
  };

  useEffect(() => {
    callGetHouses();
  }, []);

  return (
    <ScreenContainer>
      <HousesList data={housesList}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Encontre aqui seu imóvel</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Localização" placeholder="Digite o endereço" />
          {loading && <Loader />}
        </ContentContainer>
      </HousesList>
    </ScreenContainer>
  );
};
