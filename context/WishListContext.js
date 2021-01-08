import React, { createContext, useState, useEffect } from 'react';

import { setWishList, fetchWishList } from '../storage';

export const WishListContext = createContext();

const { Provider } = WishListContext;

export const WishListProvider = (props) => {
  const [wishListEvents, setWishListEvents] = useState({});
  const { children } = props;
  const addWishListEvent = (event) => {
    const events = {
      ...wishListEvents,
      [event.id]: event
    };
    setWishList(events);
    setWishListEvents(events);
  };
  const removeWishListEvent = (event) => {
    const events = { ...wishListEvents };
    delete events[event.id];
    setWishList(events);
    setWishListEvents(events);
  };
  useEffect(() => {
    const updateWishList = async () => {
      const wishList = await fetchWishList();
      setWishListEvents(wishList);
    };
    updateWishList();
  }, []);
  const isEventInWishList = (event) => wishListEvents[event.id] !== undefined;
  return (
    <Provider value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]} testId="wishlist-provider">
      {children}
    </Provider>
  );

};
