import React from 'react';
import { HouseCard } from '../../molecules';
import { HousesListContainer } from './styles';

export const HousesList = ({ data, children, loading }) => {
  return (
    <HousesListContainer
      data={data}
      refreshing={loading}
      renderItem={({ item }) => (
        <HouseCard
          item={item}
          title={item.address.line}
          description={`${item.address.neighborhood_name} - ${item.address.state}`}
          imgSource={item.photos[0].href}
          price={item.community.price_max}
        />
      )}
      keyExtractor={item => item.property_id}
      ListHeaderComponent={children}
    />
  );
};
