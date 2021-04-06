import React from 'react';
import { HouseCard } from '../../molecules';
import { HousesListContainer } from './styles';

export const HousesList = ({ data, children, loading, onEndReached }) => {
  return (
    <HousesListContainer
      data={data}
      onEndReached={onEndReached}
      refreshing={loading}
      renderItem={({ item }) => (
        <HouseCard
          item={item}
          title={item.address.line}
          description={`${item.address.neighborhood_name} - ${item.address.state}`}
          imgSource={item.photos[0].href}
          price={item.community ? item.community.price_max : 0}
        />
      )}
      keyExtractor={item => item.property_id}
      ListHeaderComponent={children}
    />
  );
};
