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

it('renders correctly', () => {
  renderer.create(<Routes />);
});

it('renders event detail title', async () => {
  let wrapper;
  await renderer.act(async () => {
    wrapper = renderer.create(<Routes />);
  });
});
