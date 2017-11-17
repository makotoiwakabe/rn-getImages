import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// const AlbumList = () => {
class AlbumList extends Component {

  //1 set default state for our component
  // class level porperty
  // variable name should be exactly "state" * it doesnot have let or const, so its not variable??
  state = { albums: [] };
  //3 make sure that our component makes use of the data

  // lifcycle method
  componentWillMount() {
    const getImages = async() => {
        const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        //2 when we fetch our data we are going to tell our component state to update
        this.setState({ albums: response.data });
    };
    getImages();
  }

  renderAlbums() {
    //album is props
      return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }
  // When using class component, Need to be implmented on render function
  render() {
    console.log(this.state);
    return (
       <View>
       {this.renderAlbums()}
       </View>
    );
  }
}  // as class based componet , No need semicolon

export default AlbumList;
