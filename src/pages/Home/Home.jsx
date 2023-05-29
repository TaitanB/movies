import React, { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../../components/services/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setTrendingMovies(trendingMovies);
    };

    getTrendingMovies();
  }, []);

  return (
    <div className={css.home_content}>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
