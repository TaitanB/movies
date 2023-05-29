import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, useSearchParams, Outlet } from 'react-router-dom';

import { fetchSearchMovies } from '../../components/services/api';
import MoviesList from '../../components/MoviesList/MoviesList';

import Loader from 'components/Loader/Loader';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const location = useLocation();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchsearchQuery = () => {
      fetchSearchMovies(searchQuery).then(movies => {
        if (movies.length !== 0) {
          setMovies(movies);
        } else {
          alert('Nothing found.');
          setQuery('');
        }
      });
    };
    fetchsearchQuery();
    setMovies([]);
  }, [searchQuery]);

  function onSubmit(event) {
    event.preventDefault();

    if (query !== '') {
      setSearchParams({ query: `${query}` });
    } else {
      alert('Please enter a valid value.');
      return;
    }
  }

  const handleChange = event => {
    event.preventDefault();
    setQuery(event.target.value.trim());
  };

  return (
    <>
      <form onSubmit={onSubmit} className={css.form}>
        <label>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />
          <button type="submit" className={css.btn}>
            Search
          </button>
        </label>
      </form>
      <Suspense fallback={<Loader />}>
        {movies.length === 0 ? (
          <div className={css.no_movies}>There are no movies here yet.</div>
        ) : (
          <MoviesList movies={movies} prevLocation={location} />
        )}
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
