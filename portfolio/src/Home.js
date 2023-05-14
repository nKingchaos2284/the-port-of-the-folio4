import React from 'react';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Carousel from './Carousel';

function Home() {
  return (
    <div align="center">
      <h1>Jose Mauricio Cabrera Elias | Software Engineer Portfolio</h1>
      <Portfolio />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
