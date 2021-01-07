import React from 'react';
import {
  Text, View, StyleSheet, Image
} from 'react-native';

const EventItem = ({ event }) => (
  <View style={styles.rootEvent}>
    <Image
      style={styles.eventImg}
      source={{ uri: event.img }}
    />
    <View style={styles.eventContent}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  rootEvent: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
  },
  date: {
    fontSize: 15
  },
  eventImg: {
    width: 50,
    height: 50,
    marginRight: 30
  }
});

export default EventItem;
