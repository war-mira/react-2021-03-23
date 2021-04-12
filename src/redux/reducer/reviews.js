<<<<<<< HEAD
import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);
export default (reviews = defaultReviews, action) => {
  const { type } = action;
  console.log(reviews);
  switch (type) {
    default:
      return reviews;
=======
import { ADD_REVIEW } from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedReviews), action) => {
  const { type, review, reviewId, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
  }
};
