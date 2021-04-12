import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadReviews } from '../../redux/actions';

const Reviews = ({ reviews, restaurantId, loadReviews }) => {
  useEffect(() => {
    loadReviews(restaurantId);
  }, [loadReviews, restaurantId]);

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
<<<<<<< HEAD
      <ReviewForm />
=======
      <ReviewForm restaurantId={restaurantId} />
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
    </div>
  );
};

Reviews.propTypes = {
<<<<<<< HEAD
=======
  restaurantId: PropTypes.string,
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect(null, { loadReviews })(Reviews);
