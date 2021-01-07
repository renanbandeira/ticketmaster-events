import React from 'react';
import { View } from 'react-native';

import { EventItem } from '../../components';

import styles from './styles';

export default function EventDetail({ route }) {
  const { event } = route.params;
  return (
    <View style={styles.container}>
      <EventItem event={event} />
    </View>
  );
}
