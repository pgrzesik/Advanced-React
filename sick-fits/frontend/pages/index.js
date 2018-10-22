import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div>
    <p>Hey</p>
    <Link href='/sell'>
      Sell!
    </Link>
  </div>
);

export default Home;
