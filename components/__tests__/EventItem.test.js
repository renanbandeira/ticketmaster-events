import React from 'react';
import renderer from 'react-test-renderer';

import EventItem from '../EventItem';

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

describe('EventItem component', () => {
  it('renders correctly', () => {
    renderer.create(<EventItem />);
  });

  it('renders event item', () => {
    const { root } = renderer.create(<EventItem event={event} />);
    const texts = root.findAllByType('Text');
    expect(texts).toHaveLength(3);
    expect(texts[0].children[0]).toBe(event.name);
    expect(texts[1].children[0]).toBe(event.dates.start.localDate);
  });

  it('tests press event', async () => {
    let hasPressedButton = false;
    const onPress = () => {
      hasPressedButton = true;
    };
    const { root } = renderer.create(<EventItem event={event} onPress={onPress} />);
    expect(hasPressedButton).toBe(false);
    await renderer.act(async () => {
      root.props.onPress();
    });
    expect(hasPressedButton).toBe(true);
  });

  it('tests add favorite event', async () => {
    let hasAddedFavorite = false;
    const onPress = () => {
      hasAddedFavorite = true;
    };
    const { root } = renderer.create(<EventItem event={event} onAddFavorite={onPress} />);
    expect(hasAddedFavorite).toBe(false);
    await renderer.act(async () => {
      root.findByProps({ testId: 'favorite-icon' }).props.onPress();
    });
    expect(hasAddedFavorite).toBe(true);
  });

  it('tests remove favorite event', async () => {
    let hasAddedFavorite = true;
    const onPress = () => {
      hasAddedFavorite = false;
    };
    const { root } = renderer
      .create(<EventItem event={event} isFavorite onRemoveFavorite={onPress} />);
    expect(hasAddedFavorite).toBe(true);
    await renderer.act(async () => {
      root.findByProps({ testId: 'favorite-icon' }).props.onPress();
    });
    expect(hasAddedFavorite).toBe(false);
  });
});
