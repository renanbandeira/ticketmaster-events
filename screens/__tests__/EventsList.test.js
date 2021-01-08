import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';

import EventsList from '../EventsList';

import { EventItem } from '../../components';

import { WishListContext } from '../../context/WishListContext';

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
    const addWishListEvent = jest.fn();
    const removeWishListEvent = jest.fn();
    const isEventInWishList = jest.fn();
    const setOptions = jest.fn();
    const wishListEvents = {};
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <EventsList navigation={{ setOptions }} />
        </WishListContext.Provider>
      );
    });
    expect(wrapper.root.findAllByType(EventItem)).toHaveLength(0);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('renders events from API response', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: response });
    const addWishListEvent = jest.fn();
    const removeWishListEvent = jest.fn();
    const isEventInWishList = jest.fn();
    const setOptions = jest.fn();
    const wishListEvents = {};
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <EventsList navigation={{ setOptions }} />
        </WishListContext.Provider>
      );
    });
    expect(wrapper.root.findAllByType(EventItem)).toHaveLength(1);
    axiosGetSpy.mockRestore();
  });

  it('searches events from API response', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValue({ data: response });
    const addWishListEvent = jest.fn();
    const removeWishListEvent = jest.fn();
    const isEventInWishList = jest.fn();
    const setOptions = jest.fn();
    const wishListEvents = {};
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <EventsList navigation={{ setOptions }} />
        </WishListContext.Provider>
      );
    });
    expect(wrapper.root.findAllByType(EventItem)).toHaveLength(1);
    await renderer.act(async () => {
      wrapper.root.findByProps({ testId: 'search-view' }).props.onChangeSearch('Disney');
    });
    expect(axios.get).toHaveBeenCalledTimes(2);
    axiosGetSpy.mockRestore();
  });

  it('renders IconWithBadge for wish list events', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: response });
    const addWishListEvent = jest.fn();
    const removeWishListEvent = jest.fn();
    const isEventInWishList = jest.fn();
    const setOptions = jest.fn(({ headerRight }) => {
      const header = headerRight();
      expect(header).not.toBe(null);
      expect(header.props.count).toEqual(1);
    });
    const wishListEvents = {
      1021: {
        id: '1021',
        name: 'DIsney'
      }
    };
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <EventsList navigation={{ setOptions }} />
        </WishListContext.Provider>
      );
    });
    expect(wrapper.root.findAllByType(EventItem)).toHaveLength(1);
    expect(setOptions).toHaveBeenCalledTimes(1);
    axiosGetSpy.mockRestore();
  });
});
