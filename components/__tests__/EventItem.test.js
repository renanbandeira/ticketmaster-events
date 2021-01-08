import React from 'react';
import renderer from 'react-test-renderer';

import EventItem from '../EventItem';

describe('EventItem component', () => {
  it('renders correctly', () => {
    renderer.create(<EventItem />);
  });

  it('renders event item', () => {
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
    const { root } = renderer.create(<EventItem event={event} />);
    const texts = root.findAllByType('Text');
    expect(texts).toHaveLength(3);
    expect(texts[0].children[0]).toBe(event.name);
    expect(texts[1].children[0]).toBe(event.dates.start.localDate);
  });

  it('tests press event', async () => {
    let hasPressedButton = false;
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
});
