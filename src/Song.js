import React, { Component } from 'react';

export default React.createClass({
	render() {
    var data = this.props.data;

  	return (
    	<tr className="song" id="song-{this.props.data.id}">
      	<td>{data.title}</td>
        <td>{data.artist}</td>
        <td>{data.album}</td>
        <td>{data.genre}</td>
        <td>{data.user}</td>
      </tr>
    );
  }
});

