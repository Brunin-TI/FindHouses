import React from 'react';
import { SectionView, SectionImage } from './styles';
import { StatusBar } from 'react-native';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';
export const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};
