import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { throttle } from 'underscore';

import { EventItem, SearchView } from '../../components';

import { fetchEvents } from '../../api';

import styles from './styles';

export default function EventsList({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentQuery, setCurrentQuery] = useState();
  const fetchMoreEvents = () => {
    setLoading(true);
    fetchEvents(page, currentQuery).then((response) => {
      setPage(page + 1);
      if (response.data) {
        if (currentQuery) {
          setFilteredEvents([...filteredEvents, ...response.data['_embedded'].events]);
        } else {
          setEvents([...events, ...response.data['_embedded'].events]);
        }
      }
      setLoading(false);
    });
  }
  useEffect(() => {
    fetchMoreEvents();
  }, []);

  const onChangeSearch = (text) => {
    setFilteredEvents([]);
    setPage(1);
    setCurrentQuery(text);
    fetchMoreEvents();
  };

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
      <SearchView onChangeSearch={throttle(onChangeSearch, 1500)} />
      <FlatList
        contentContainerStyle={styles.list}
        data={currentQuery ? filteredEvents : events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={fetchMoreEvents}
        onEndReachedThreshold={0.3}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}
