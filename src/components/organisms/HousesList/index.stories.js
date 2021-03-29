import styled from 'styled-components/native';
import { array } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { HousesList } from './index';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('HousesList', module);
stories.addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>);
stories.add('Standard', () => {
  const mockArray = [
    {
      address: {
        property_id: '12345',
        line: 'Minha Casa',
        neighborhood_name: 'Savassi',
        state: 'BH',
        photos: [
          {
            href:
              'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
          },
        ],
        community: {
          price_max: 500,
        },
      },
    },
  ];
  return <HousesList data={mockArray} />;
});
