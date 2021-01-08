import React from 'react';
import renderer from 'react-test-renderer';

import IconWithBadge from '../IconWithBadge';

describe('IconWithBadge component', () => {
  it('renders correctly', () => {
    renderer.create(<IconWithBadge />);
  });

  it('renders count', async () => {
    const count = '3';
    let wrapper;
    await renderer.act(async () => {
      wrapper = renderer.create(<IconWithBadge count={count} />);
    });
    const { root } = wrapper;
    const textCount = root.findAllByType('Text');
    expect(textCount[1].children[0]).toBe(count);
  });
});
