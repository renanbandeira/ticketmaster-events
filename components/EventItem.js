import React from 'react';
import {
  Text, View, StyleSheet, Image, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-animated-icons';

const EventItem = ({
  event, onPress, isFavorite, onAddFavorite, onRemoveFavorite
}) => {
  if (!event) {
    return null;
  }
  const Container = onPress ? TouchableOpacity : View;
  const toggleFavorite = () => {
    if (isFavorite) {
      onRemoveFavorite(event);
    } else {
      onAddFavorite(event);
    }
  };
  return (
    <Container style={styles.rootEvent} onPress={onPress}>
      <Image
        style={styles.eventImg}
        source={{ uri: event.images ? event.images[0].url : 'https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg' }}
      />
      <View style={styles.eventContent}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>{event.dates ? event.dates.start.localDate : 'No Date'}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteArea} onPress={toggleFavorite}>
        <View>
          <Icon name={isFavorite ? 'heart' : 'heart-outline'} size={32} color="#4CAF50" />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  rootEvent: {
    flexDirection: 'row',
    paddingTop: 5,
    marginBottom: 5,
    borderBottomColor: '#efefef',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 20,
  },
  date: {
    fontSize: 15
  },
  eventImg: {
    flex: 1,
    width: 60,
    height: 60,
    marginRight: 20
  },
  favoriteArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  eventContent: {
    flex: 3
  }
});

export default EventItem;
