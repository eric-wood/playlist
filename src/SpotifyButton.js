import React from 'react';

export default React.createClass({
  render() {
    let uri = `https://embed.spotify.com/?uri=spotify%3Atrack%3A${this.props.id}`

    return (
      <iframe src={uri} width="78" height="78" frameBorder="0" allowTransparency="true"></iframe>
    );
  }
});
