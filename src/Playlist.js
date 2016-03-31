import React, { Component } from 'react';
import Song from './Song';

export default React.createClass({
  render() {
    var songs = this.props.songs.map(function(song) {
    	return (
      	<Song data={song} key={song.id} />
      );
    });
    
    return (
    	<table className="song-list">
        <thead>
          <tr>
            <th>Song name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Linked by</th>
          </tr>
        </thead>
        <tbody>
          {songs}
        </tbody>
      </table>
    );
  }
});
