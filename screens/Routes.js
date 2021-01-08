import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventsList from './EventsList';
import EventDetail from './EventDetail';

import { IconWithBadge, SearchView } from '../components';

const Stack = createStackNavigator();

export default function Routes() {
  const headerOptions = {
    headerStyle: {
      backgroundColor: '#4CAF50'
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };
  const wishListButtonStyle = {
    headerRight: () => (
      <IconWithBadge count={2} />
    )
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EventsList"
        screenOptions={{
          ...headerOptions
        }}
      >
        <Stack.Screen
          name="EventsList"
          component={EventsList}
          options={{ title: 'Ticket Master Events', ...wishListButtonStyle }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetail}
          options={({ route }) => ({ title: route.params.event.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
