import React, { useContext, useLayoutEffect } from 'react';
import {
  View, FlatList
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { EventItem } from '../../components';
import { WishListContext } from '../../context/WishListContext';

import styles from './styles';

const animations = ['slideInLeft', 'slideInRight'];

export default function WishList({ navigation }) {
  const [wishListEvents, addWishListEvent, removeWishListEvent] = useContext(WishListContext);

  useLayoutEffect(() => {
    if (Object.keys(wishListEvents).length === 0) {
      navigation.goBack();
    }
  }, [wishListEvents, navigation]);

  const goToDetails = (event) => () => navigation.navigate('EventDetail', { event });
  const renderItem = ({ item, index }) => (
    <Animatable.View animation={animations[index % 2]} iterationCount={1} direction="normal">
      <EventItem
        event={item}
        onPress={goToDetails(item)}
        onAddFavorite={addWishListEvent}
        onRemoveFavorite={removeWishListEvent}
        isFavorite
      />
    </Animatable.View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={Object.values(wishListEvents)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
