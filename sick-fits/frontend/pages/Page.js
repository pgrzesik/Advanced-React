import React from 'react';

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <p>Hey I'm the page component!</p>
        {this.props.children}
      </div>
    )
  }
}
