import React, { Component } from 'react';
import Song from './Song';

export default React.createClass({
  getInitialState() {
    return {
      songs:   [],
      filters: {}
    };
  },
  componentDidMount() {
    // TODO: AJAX this in
    this.setState({
      songs: [
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
      ]
    });
  },
  filterBy(key, value) {
    console.log(key, value);
  },
  render() {
    var songs = this.state.songs.map(song => {
    	return (
      	<Song data={song} key={song.id} handleFilter={this.filterBy} />
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
