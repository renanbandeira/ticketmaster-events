import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './screens/Routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}
