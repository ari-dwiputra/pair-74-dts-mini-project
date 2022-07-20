import React from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header'
import Slideshow from '../component/Slideshow'


import ListMoviesPopular from "../container/ListMoviesPopular";
import ListMoviesTopRated from "../container/ListMoviesTopRated";
import ListMoviesTrending from "../container/ListMoviesTrending";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Slideshow />
      <div className='mb-4'>
        <ListMoviesPopular />
        <ListMoviesTopRated />
        <ListMoviesTrending />
      </div>
      <Footer />
    </div>
  )
}
