import React from 'react';
import Link from 'next/link';

class Home extends React.Component {

  render() {
    return (
      <div>
        <p>Hey</p>
        <Link href='/sell'>
          Sell!
        </Link>
      </div>);
  }
}

export default Home;
