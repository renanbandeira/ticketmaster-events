import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { EventItem } from '../../components';

import styles from './styles';

export default function EventsList() {
  const event = {
    title: 'Event Title',
    date: 'Event Date',
    img: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
  };

  return (
    <View style={styles.container}>
      <EventItem event={event} />
      <StatusBar style="auto" />
    </View>
  );
}
