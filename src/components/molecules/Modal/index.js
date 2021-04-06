import React from 'react';
import { Title, IconButton } from '../../atoms';
import {
  ModalBackground,
  ModalContainer,
  BottomScreenContainer,
  HeaderContainer,
} from './styles';

export const Modal = ({ visible, onClose, title, children }) => {
  return (
    <ModalContainer transparent visible={visible} onRequestClose={onClose}>
      <ModalBackground>
        <BottomScreenContainer>
          <HeaderContainer>
            <Title>{title}</Title>
            <IconButton iconName="close" onPress={onClose}></IconButton>
          </HeaderContainer>
          {children}
        </BottomScreenContainer>
      </ModalBackground>
    </ModalContainer>
  );
};
