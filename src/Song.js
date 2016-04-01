import React from 'react';
import SpotifyButton from './SpotifyButton';

export default React.createClass({
  filterBy(key, value) {
    return event => {
      this.props.handleFilter({
        key:   key,
        value: value
      });
    };
  },
	render() {
    var data = this.props.data;

  	return (
    	<tr className="song" id="song-{this.props.data.id}">
        <td>
          <SpotifyButton id={data.id} />
        </td>
      	<td>{data.title}</td>
        <td>{data.artist}</td>
        <td>{data.album}</td>
        <td>
          <a onClick={this.filterBy('genre', data.genre)} href="#">
            {data.genre}
          </a>
        </td>
        <td>
          <a onClick={this.filterBy('user', data.user)} href="#">
            {data.user}
          </a>
        </td>
      </tr>
    );
  }
});

