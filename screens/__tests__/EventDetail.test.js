import React from 'react';
import renderer from 'react-test-renderer';

import EventDetail from '../EventDetail';

import { EventItem } from '../../components';
import { WishListContext } from '../../context/WishListContext';

describe('EventDetail screen', () => {
  const addWishListEvent = jest.fn();
  const removeWishListEvent = jest.fn();
  const isEventInWishList = jest.fn();
  const wishListEvents = {};

  it('renders correctly', () => {
    renderer.create(
      <WishListContext.Provider
        value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
      >
        <EventDetail route={{ params: {} }} />
      </WishListContext.Provider>
    );
  });

  it('renders event item', async () => {
    const event = {
      name: 'Disney',
      dates: {
        start: {
          localDate: '2021-01-19'
        }
      },
      images: [
        { url: '' }
      ]
    };
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(
        <WishListContext.Provider
          value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}
        >
          <EventDetail route={{ params: { event } }} />
        </WishListContext.Provider>
      );
    });
    const { root } = wrapper;
    expect(root.findAllByType(EventItem)).toHaveLength(1);
    const texts = root.findAllByType('Text');
    expect(texts).toHaveLength(3);
    expect(texts[0].children[0]).toBe(event.name);
    expect(texts[1].children[0]).toBe(event.dates.start.localDate);
  });
});
