import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
import useForm from '../../../hooks/use-form';

import Rate from '../../rate';
import styles from './review-form.module.css';
import { connect } from 'react-redux';
import Button from '../../button';
<<<<<<< HEAD
=======
import { addReview } from '../../../redux/actions';
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b

const INITIAL_VALUES = { name: '', text: '', rating: 3 };

const ReviewForm = ({ onSubmit }) => {
  const { values, handlers, reset } = useForm(INITIAL_VALUES);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(values);
    reset();
  };

  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.addReviewTitle}>Leave your review</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.reviewFormItem}>
          <input
            placeholder="Your name"
            className={styles.message}
            {...handlers.name}
          />
        </div>
        <div className={styles.reviewFormItem}>
          <textarea
            placeholder="Your review"
            className={styles.message}
            {...handlers.text}
          />
        </div>
        <div className={styles.rateWrap}>
          <span>Rating: </span>
          <span>
            <Rate {...handlers.rating} />
          </span>
        </div>
        <div className={styles.publish}>
          <Button primary block>
            PUBLISH REVIEW
          </Button>
        </div>
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default connect(null, () => ({
  onSubmit: (values) => console.log(values), // TODO
}))(ReviewForm);
=======
ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit: (review) => dispatch(addReview(review, props.restaurantId)),
});

export default connect(null, mapDispatchToProps)(ReviewForm);
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
