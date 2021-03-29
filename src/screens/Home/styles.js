import styled from 'styled-components/native';

export const ScreenScroll = styled.ScrollView``;

export const ScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.wp(100)}px;
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.metrics.px(24)}px;
`;
export const TitleContainer = styled.View`
  width: 65%;
`;

export const LoaderContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const Loader = styled.ActivityIndicator`
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
`;
