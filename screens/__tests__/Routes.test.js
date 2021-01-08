import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Routes from '../Routes';

jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      ticketmasterApiKey: 'apiKey'
    }
  }
}));

it('renders correctly', async () => {
  await renderer.act(async () => {
    renderer.create(<Routes />);
  });
});
