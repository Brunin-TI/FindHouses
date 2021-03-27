import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;
