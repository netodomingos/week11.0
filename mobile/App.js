import React from 'react';

import 'intl'

import 'intl/locale-data/jsonp/pt-BR'

import { StatusBar } from 'react-native'

import Routes from './src/Routes'

export default function App() {
  return (
    <>
      {/* Muda a cor da Status Bar */}
      <StatusBar barStyle='dark-content' />
      <Routes/>
    </>
  );
}

