#!/usr/bin/env bash

# Variables
GREEN='\033[00;32m'
WHITE='\033[01;37m'
END=$'\e[0m'
YELLOW='\033[00;33m'
CYAN='\033[00;36m'
COMPONENT=$1;
DIRECTORY=components;

# Functions
function log() {
  printf "\n${WHITE}%s${END}\n" "$*"
}

function success() {
  printf "\n${GREEN}%s${END}\n" "$*"
}

function warning() {
  printf "\n${YELLOW}%s${END}\n" "$*"
}

info() {
  printf "\n${CYAN}%s${END}\n" "$*"
}

if [ $# -lt 1 ]
  then
    echo "You need to supply COMPONENT name"
fi

log "Creating $COMPONENT.js for ${COMPONENT}"

cat > "$DIRECTORY/${COMPONENT}.js" <<- EOM
import React from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';

const $COMPONENT = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Hello Component!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingRight: 10
  },
  text: {
    color: '#ccc',
    textAlign: 'center'
  }
});

export default $COMPONENT;
EOM

log "Creating test file for ${COMPONENT}"

cat > "$DIRECTORY/__tests__/${COMPONENT}.test.js" <<- EOM
import React from 'react';
import renderer from 'react-test-renderer';

import $COMPONENT from '../$COMPONENT';

describe('$COMPONENT component', () => {
  it('renders correctly', () => {
    renderer.create(<$COMPONENT />);
  });
});
EOM


log "Creating component reference into $DIRECTORY/index.js"

echo "export ${COMPONENT} from './${COMPONENT}';" >> ./${DIRECTORY}/index.js

success "Component ${COMPONENT} created successfully at '${DIRECTORY}'.";
