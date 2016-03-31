import React, { Component } from 'react';
import Playlist from './Playlist';

var songs = [
	{
  	id: 1,
  	title: 'Hide and Seek',
    artist: 'Imogen Heap'
  },
  {
  	id: 2,
  	title: 'Hide and Seek',
    artist: 'Imogen Heap'
  },
  {
  	id: 3,
  	title: 'Hide and Seek',
    artist: 'Imogen Heap'
  }
]

export default class App extends Component {
  render() {
    return (
      <Playlist songs={songs} />
    );
  }
};

