import React, { useEffect } from 'react';
import { SectionView, SectionImage } from './styles';
import { StatusBar } from 'react-native';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';
import { useNavigation } from '@react-navigation/native';
export const SplashScreen = () => {
  const navigator = useNavigation();

  const goToHomeScreen = () => {
    setTimeout(() => {
      navigator.navigate('Home');
    }, 2000);
  };

  useEffect(() => {
    goToHomeScreen();
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};
