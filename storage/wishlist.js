import { storeData, retrieveData } from './utils';

const WISHLIST_KEY = 'wishlist';

export const fetchWishList = async () => {
  const wishList = await retrieveData(WISHLIST_KEY);
  if (wishList) {
    return JSON.parse(wishList);
  }
  return {};
};

export const setWishList = async (wishList) => {
  await storeData(WISHLIST_KEY, JSON.stringify(wishList));
};
