import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      ticketmasterApiKey: 'apiKey'
    }
  }
}));

it.skip('skip.renders correctly', () => {
  renderer.create(<App />);
});
