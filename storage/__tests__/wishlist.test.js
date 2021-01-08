import { fetchWishList, setWishList } from '../wishlist';

describe('wish list tests', () => {
  it('fetches successfully wish list from async storage', async () => {
    const wishList = await fetchWishList();
    expect(wishList).toStrictEqual({});
  });

  it('stores successfully wish list from async storage', async () => {
    const event = {
      id: 10,
      name: 'Disney'
    };
    await setWishList({
      10: event
    });
    const wishList = await fetchWishList();
    expect(wishList).toStrictEqual({
      10: event
    });
  });

});
