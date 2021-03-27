import styled from 'styled-components/native';
import { colors } from '../../styles/colors';
export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: 100%;
  height: 100%;
`;

export const SectionImage = styled.Image`
  width: 150px;
  height: 150px;
`;
