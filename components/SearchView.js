import React, { useState } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const SearchView = ({ onChangeSearch = () => undefined }) => {
  const [search, setSearch] = useState('');
  const [searchViewEnabled, setSearchViewEnabled] = useState(false);
  const onChangeText = (text) => {
    setSearch(text);
    onChangeSearch(text);
  };
  return (
    <View style={styles.rootSearch}>
      {searchViewEnabled
        ? (
          <Animatable.View animation="lightSpeedIn" iterationCount={1} direction="normal">
            <SearchBar
              containerStyle={styles.searchContainerInput}
              inputContainerStyle={styles.searchContainerInput}
              placeholder="Search Events by Title"
              onChangeText={onChangeText}
              value={search}
              lightTheme
              clearIcon
              autoFocus
              onClear={() => {
                onChangeSearch('');
                setSearchViewEnabled(false);
              }}
            />
          </Animatable.View>
        )
        : (
          <TouchableOpacity
            onPress={() => setSearchViewEnabled(true)}
          >
            <Animatable.View animation="lightSpeedIn" iterationCount={1} direction="normal" style={styles.searchButton}>
              <Text style={styles.searchButtonContent}> Search</Text>
            </Animatable.View>
          </TouchableOpacity>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootSearch: {
    marginBottom: 10
  },
  searchContainerInput: {
    backgroundColor: 'white',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonContent: {
    width: 100,
    height: 30,
    borderRadius: 20,
    color: '#757575',
    backgroundColor: '#dedede',
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default SearchView;
