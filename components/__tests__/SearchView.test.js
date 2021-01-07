import { TouchableOpacity } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { SearchBar } from 'react-native-elements';

import SearchView from '../SearchView';

describe('SearchView component', () => {
  it('renders correctly', () => {
    renderer.create(<SearchView />);
  });

  it('renders search button', () => {
    const { root } = renderer.create(<SearchView />);
    expect(root.findAllByType(TouchableOpacity)).toHaveLength(1);
  });

  it('renders search bar after pressing button', async () => {
    const { root } = renderer.create(<SearchView />);
    await renderer.act(async () => {
      expect(root.findAllByType(SearchBar)).toHaveLength(0);
      root.findByType(TouchableOpacity).props.onPress();
    });
    expect(root.findAllByType(TouchableOpacity)).toHaveLength(0);
    expect(root.findAllByType(SearchBar)).toHaveLength(1);
  });

  it('renders search button after clearing search', async () => {
    const { root } = renderer.create(<SearchView />);
    await renderer.act(async () => {
      expect(root.findAllByType(SearchBar)).toHaveLength(0);
      root.findByType(TouchableOpacity).props.onPress();
    });
    expect(root.findAllByType(TouchableOpacity)).toHaveLength(0);
    expect(root.findAllByType(SearchBar)).toHaveLength(1);
    await renderer.act(async () => {
      root.findByType(SearchBar).props.onClear();
    });
    expect(root.findAllByType(TouchableOpacity)).toHaveLength(1);
    expect(root.findAllByType(SearchBar)).toHaveLength(0);
  });
});
