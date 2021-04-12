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
  }
};
