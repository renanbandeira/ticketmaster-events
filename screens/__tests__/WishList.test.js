import React from 'react';
import renderer from 'react-test-renderer';
import WishList from '../WishList';

import { EventItem } from '../../components';

import { WishListContext } from '../../context/WishListContext';

jest.mock('expo-constants', () => ({
  manifest: {
    extra: {
      ticketmasterApiKey: 'apiKey'
    }
  }
}));

describe('WishList screen', () => {
  it('renders correctly', async () => {
    const addWishListEvent = jest.fn();
    const removeWishListEvent = jest.fn();
    const isEventInWishList = jest.fn();
    const goBack = jest.fn();
    const wishListEvents = {};
    await renderer.act(async () => {
      renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <WishList navigation={{ goBack }} />
        </WishListContext.Provider>
      );
    });
    expect(goBack).toHaveBeenCalledTimes(1);
  });

  it('renders event items', async () => {
    const addWishListEvent = jest.fn();
    const removeWishListEvent = jest.fn();
    const isEventInWishList = jest.fn();
    const goBack = jest.fn();
    const wishListEvents = {
      1: {
        id: '1',
        name: 'Disney',
        dates: {
          start: {
            localDate: '2021-01-19'
          }
        },
        images: [
          { url: '' }
        ]
      }
    };
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <WishList navigation={{ goBack }} />
        </WishListContext.Provider>
      );
    });
    const { root } = wrapper;
    expect(goBack).toHaveBeenCalledTimes(0);
    expect(root.findAllByType(EventItem)).toHaveLength(1);
  });
});
