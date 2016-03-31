import React, { Component } from 'react';
import Playlist from './Playlist';

export default React.createClass({
  getInitialState() {
    return { data: [] };
  },
  componentDidMount() {
    this.setState({ data: [
      {
        id: 1,
        title:  'Hide and Seek',
        artist: 'Imogen Heap',
        album:  'Speak for Yourself',
        genre:  'Black Metal',
        user:   'Eric Wood'
      },
      {
        id: 2,
        title:  'Work',
        artist: 'Rihanna',
        album:  'ANTI',
        genre:  'twerk',
        user:   'John Yeglinski'
      },
      {
        id: 3,
        title:  'Uptown Funk',
        artist: 'Bruno Marz',
        album:  'Uptown Special',
        genre:  'Funk',
        user:   'Jon Culver'
      }
    ]});
  },
  render() {
    return (
      <Playlist songs={this.state.data} />
    );
  }
});

