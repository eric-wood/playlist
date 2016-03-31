import React, { Component } from 'react';
import Song from './Song';

export default class Playlist extends Component {
  render() {
    var songs = this.props.songs.map(function(song) {
    	return (
      	<Song data={song} key={song.id} />
      );
    });
    
    return (
    	<ul className="song-list">
      	{songs}
      </ul>
    );
  }
};
