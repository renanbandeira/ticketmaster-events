import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventsList from './EventsList';
import EventDetail from './EventDetail';
import WishList from './WishList';

import { IconWithBadge, SearchView } from '../components';

import { WishListProvider } from '../context/WishListContext';

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
  return (
    <WishListProvider>
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
            options={{ title: 'Ticket Master Events' }}
          />
          <Stack.Screen
            name="EventDetail"
            component={EventDetail}
            options={({ route }) => ({ title: route.params.event.name })}
          />
          <Stack.Screen
            name="WishList"
            component={WishList}
            options={{ title: 'My Wish List' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WishListProvider>
  );
}
