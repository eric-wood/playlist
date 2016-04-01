import React from 'react';
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
          id:     '76WRHOINx2bIcOgnwBKydI',
          title:  'Hide and Seek',
          artist: 'Imogen Heap',
          album:  'Speak for Yourself',
          genre:  'Black Metal',
          user:   'Eric Wood'
        },
        {
          id:     '4fkAWGCbxNizyNwsHlrajH',
          title:  'Farewell Transmission',
          artist: 'Songs: Ohia',
          album:  'Magnolia Electric Co.',
          genre:  'I have no idea?',
          user:   'Eric Wood'
        },
        {
          id:     '4gB5Idv1iw8jgxyEvuwPVA',
          title:  'Hey Miami',
          artist: 'Sylvan Esso',
          album:  'Sylvan Esso',
          genre:  'Electronic Folk',
          user:   'Eric Wood'
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
            <th></th>
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
