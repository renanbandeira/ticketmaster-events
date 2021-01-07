import { ActivityIndicator } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';

import EventsList from '../EventsList';

import { EventItem } from '../../components';

jest.mock('axios');

const response = {
  _embedded: {
    events: [{
      id: '1021',
      name: 'DIsney'
    }]
  }
};

jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      ticketmasterApiKey: 'apiKey'
    }
  }
}));

describe('EventsList screen', () => {
  it('calls for API to fetch events on mounting', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(<EventsList />);
    });
    expect(wrapper.root.findAllByType(ActivityIndicator)).toHaveLength(1);
    expect(wrapper.root.findAllByType(EventItem)).toHaveLength(0);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('renders events from API response', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: response });
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(<EventsList />);
    });
    expect(wrapper.root.findAllByType(ActivityIndicator)).toHaveLength(0);
    expect(wrapper.root.findAllByType(EventItem)).toHaveLength(1);
    axiosGetSpy.mockRestore();
  });
});
