import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import { reviewSelector } from '../../../redux/selectors';

import styles from './review.module.css';
import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating }) => {
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};
export default connect((state, props) => {
  return {
    review: reviewSelector(state, props),
  };
})(Review);

// const mapStateToProps = (state, props) => ({
//   review: state.reviews[props.id],
// });

<<<<<<< HEAD
// export default connect(mapStateToProps)(Review);
=======
// const mapStateToProps = (state, props) => ({
//   ...reviewWitUserSelector(state, props),
// });

// const mapStateToProps = (state, props) => reviewWitUserSelector(state, props);

const mapStateToProps = reviewWitUserSelector;

export default connect(mapStateToProps)(Review);
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
