import React from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';

export default class Page extends React.Component {
  render () {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
