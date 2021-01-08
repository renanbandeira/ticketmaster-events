import React, { createContext, useState } from 'react';

export const WishListContext = createContext();

const { Provider } = WishListContext;

export const WishListProvider = (props) => {
  const [wishListEvents, setWishListEvents] = useState({});
  const { children } = props;
  const addWishListEvent = (event) => {
    setWishListEvents({
      ...wishListEvents,
      [event.id]: event
    });
  };
  const removeWishListEvent = (event) => {
    const events = { ...wishListEvents };
    delete events[event.id];
    setWishListEvents(events);
  };
  const isEventInWishList = (event) => wishListEvents[event.id] !== undefined;
  return (
    <Provider value={[wishListEvents, addWishListEvent, removeWishListEvent, isEventInWishList]}>
      {children}
    </Provider>
  );

};
