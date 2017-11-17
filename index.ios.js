// Index.ios.js - place code in hergtgte for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  // pass any values from root to child components
  //スクロールをさせるために flex:1を追加する
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
