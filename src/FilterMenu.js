import React from 'react';

export default React.createClass({
  render() {
    let items = this.props.items.map(item => {
      return (
        <li key={`${this.props.title}:${item}`}>
          <a href="#" onClick={this.handleClick}>{item}</a>
        </li>
      );
    });

    return (
      <li>
        <a href="#">{this.props.title}</a>
        <ul className="menu">
          {items}
        </ul>
      </li>
    );
  }
});
