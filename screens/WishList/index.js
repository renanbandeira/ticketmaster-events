import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { EventItem, SearchView } from '../../components';

import styles from './styles';

export default function WishList({ navigation }) {
  const event = {
    title: 'Event Title',
    date: 'Event Date',
    img: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
  };

  const goToDetails = () => navigation.navigate('EventDetail', { event });

  return (
    <View style={styles.container}>
      <SearchView />
      <EventItem event={event} onPress={goToDetails} />
      <StatusBar style="auto" />
    </View>
  );
}
