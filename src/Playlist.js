import React from 'react';
import Song from './Song';

export default React.createClass({
  getInitialState() {
    return {
      songs: []
    };
  },
  loadSongs() {
    let url = 'http://98259750.ngrok.io/tracks';
    $.getJSON(url).done(data => {
      let songs = data.tracks;

      this.setState({
        songs: songs,
        allSongs: songs
      });
    });
    //let songs = [
    //  {
    //    id:     '76WRHOINx2bIcOgnwBKydI',
    //    title:  'Hide and Seek',
    //    artist: 'Imogen Heap',
    //    album:  'Speak for Yourself',
    //    user:   'Jeffrey Wan'
    //  },
    //  {
    //    id:     '4fkAWGCbxNizyNwsHlrajH',
    //    title:  'Farewell Transmission',
    //    artist: 'Songs: Ohia',
    //    album:  'Magnolia Electric Co.',
    //    user:   'Eric Wood'
    //  },
    //  {
    //    id:     '4gB5Idv1iw8jgxyEvuwPVA',
    //    title:  'Hey Miami',
    //    artist: 'Sylvan Esso',
    //    album:  'Sylvan Esso',
    //    user:   'Eric Wood'
    //  }
    //];

  },
  componentDidMount() {
    this.loadSongs();

    setInterval(this.loadSongs, 1000);
  },
  setUser(user) {
    return (event) => {
      event.preventDefault();

      this.setState({
        user: user,
        songs: _.where(this.state.allSongs, { user: user })
      });
    }
  },
  render() {
    let songComponents = this.state.songs.map(song => {
    	return (
      	<Song data={song} key={song.id} setUser={this.setUser} />
      );
    });
    
    return (
      <table className="song-list">
        <thead>
          <tr>
            <th width="78"></th>
            <th>Song name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Linked by</th>
          </tr>
        </thead>
        <tbody>
          {songComponents}
        </tbody>
      </table>
    );
  }
});
