import React from 'react';
import { IconButtonContainer } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export const IconButton = ({ transparent, iconName, onPress, fill }) => {
  return (
    <IconButtonContainer onPress={onPress} transparent={transparent}>
      <Icon name={iconName} color={fill ? 'yellow' : 'white'} size={25} />
    </IconButtonContainer>
  );
};
