import React, { Component } from 'react';

export default class Song extends Component {
	render() {
  	return (
    	<li className="song" id="song-{this.props.data.id}">
      	{this.props.data.title} by {this.props.data.artist}
      </li>
    );
  }
};

