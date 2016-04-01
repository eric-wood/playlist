import React from 'react';
import SpotifyButton from './SpotifyButton';

export default React.createClass({
	render() {
    var data = this.props.data;

  	return (
    	<tr className="song" id="song-{this.props.data.id}">
        <td>
          <SpotifyButton id={data.id} />
        </td>
      	<td>{data.track_name}</td>
        <td>{data.artist}</td>
        <td>{data.track_album_name}</td>
        <td>
          <a onClick={this.props.setUser(data.user)} href="#">
            {data.user}
          </a>
        </td>
      </tr>
    );
  }
});

