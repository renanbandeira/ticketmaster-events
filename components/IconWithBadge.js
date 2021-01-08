import React from 'react';
import {
  Text, StyleSheet, View, TouchableHighlight
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconWithBadge = ({ count, onPress }) => {
  return (
    <TouchableHighlight style={styles.root} onPress={onPress}>
      <View>
        <Ionicons name="md-heart" size={32} color="#FFF" />
        <View style={styles.circle}>
          <Text style={styles.count}>{count}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingRight: 10
  },
  circle: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 20,
    height: 20,
    borderRadius: 18,
    backgroundColor: 'red'
  },
  count: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default IconWithBadge;
