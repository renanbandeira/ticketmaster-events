import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';

import { EventItem, SearchView } from '../../components';

import { fetchEvents } from '../../api';

import styles from './styles';

export default function EventsList({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const fetchMoreEvents = () => {
    setLoading(true);
    fetchEvents(page).then((response) => {
      setPage(page + 1);
      setEvents([...events, ...response.data['_embedded'].events]);
      setLoading(false);
    });
  }
  useEffect(() => {
    fetchMoreEvents();
  }, []);

  const renderHeader = () => {
    return <SearchView />;
  }

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }
    return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
    )
  };

  const renderItem = ({ item }) => (
    <EventItem event={item} onPress={goToDetails(item)} />
  );

  const goToDetails = event => () => navigation.navigate('EventDetail', { event });
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        ListHeaderComponent={renderHeader}
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={fetchMoreEvents}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderFooter}
      />
      <StatusBar style="auto" />
    </View>
  );
}
