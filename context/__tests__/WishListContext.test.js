import React from 'react';
import renderer from 'react-test-renderer';

import { WishListContext, WishListProvider } from '../WishListContext';
import { setWishList } from '../../storage';

describe('IconWithBadge component', () => {
  it('renders correctly', () => {
    renderer.create(<WishListProvider />);
  });

  it('gets wish list events from storage on mount', async () => {
    const event = {
      id: 10,
      name: 'Disney'
    };
    await setWishList({
      10: event
    });
    let storedConsumer;
    await renderer.act(async () => {
      renderer.create(
        <WishListProvider>
          <WishListContext.Consumer>
            {(consumer) => {
              storedConsumer = consumer;
            }}
          </WishListContext.Consumer>
        </WishListProvider>
      );
    });
    expect(storedConsumer[0]).toStrictEqual({ 10: event });
    await setWishList({});
  });

  it('adds wish list event', async () => {
    const event = {
      id: 10,
      name: 'Disney'
    };
    let storedConsumer;
    await renderer.act(async () => {
      renderer.create(
        <WishListProvider>
          <WishListContext.Consumer>
            {(consumer) => {
              storedConsumer = consumer;
            }}
          </WishListContext.Consumer>
        </WishListProvider>
      );
    });
    expect(storedConsumer[0]).toStrictEqual({});
    await renderer.act(async () => {
      storedConsumer[1](event);
    });
    expect(storedConsumer[0]).toStrictEqual({ 10: event });
    await setWishList({});
  });

  it('removes event from wish list', async () => {
    const event = {
      id: 10,
      name: 'Disney'
    };
    await setWishList({
      10: event
    });
    let storedConsumer;
    await renderer.act(async () => {
      renderer.create(
        <WishListProvider>
          <WishListContext.Consumer>
            {(consumer) => {
              storedConsumer = consumer;
            }}
          </WishListContext.Consumer>
        </WishListProvider>
      );
    });
    expect(storedConsumer[0]).toStrictEqual({ 10: event });
    await renderer.act(async () => {
      storedConsumer[2](event);
    });
    expect(storedConsumer[0]).toStrictEqual({});
  });

  it('checks if event is in wish list', async () => {
    const event = {
      id: 10,
      name: 'Disney'
    };
    await setWishList({
      10: event
    });
    let storedConsumer;
    await renderer.act(async () => {
      renderer.create(
        <WishListProvider>
          <WishListContext.Consumer>
            {(consumer) => {
              storedConsumer = consumer;
            }}
          </WishListContext.Consumer>
        </WishListProvider>
      );
    });
    let isEventInWishList = false;
    expect(storedConsumer[0]).toStrictEqual({ 10: event });
    await renderer.act(async () => {
      isEventInWishList = storedConsumer[3](event);
    });
    expect(isEventInWishList).toEqual(true);
    await setWishList({});
  });
});
