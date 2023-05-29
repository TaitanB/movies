import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from '../services/api.js';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(movie => {
      setReviews(movie.results);
    });
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }
  return (
    <>
      <ul className={css.review}>
        {reviews.map(review => (
          <li key={review.id}>
            <b>{review.author}</b>
            <p>{review.content}</p>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
