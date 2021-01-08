import React, { useContext } from 'react';
import { View } from 'react-native';

import { EventItem } from '../../components';
import { WishListContext } from '../../context/WishListContext';

import styles from './styles';

export default function EventDetail({ route }) {
  const [
    wishListEvents,
    addWishListEvent,
    removeWishListEvent,
    isEventInWishList
  ] = useContext(WishListContext);
  const { event } = route.params;
  return (
    <View style={styles.container}>
      <EventItem
        event={event}
        onAddFavorite={addWishListEvent}
        onRemoveFavorite={removeWishListEvent}
        isFavorite={isEventInWishList(event)}
      />
    </View>
  );
}
