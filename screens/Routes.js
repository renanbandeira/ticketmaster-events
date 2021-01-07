import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventsList from './EventsList';

const Stack = createStackNavigator();

export default function Routes() {
  return <NavigationContainer
  >
    <Stack.Navigator
        initialRouteName="EventsList"
      >
        <Stack.Screen
          name="EventsList"
          component={EventsList}
        />
      </Stack.Navigator>
  </NavigationContainer>;
}
